import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { GraphQLClient } from 'graphql-request';
import fetch from 'node-fetch';

class QueryManager {
  private globalAny: any;
  private endpoint: string;
  private client: GraphQLClient;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.globalAny = global;
    this.globalAny.fetch = fetch;
    this.client = new GraphQLClient(endpoint);
  }

  public async authenticateUser(
    userPoolId: string,
    clientId: string,
    username: string,
    password: string,
  ): Promise<any> {
    const authToken: string = await new Promise((resolve, reject) => {
      const authenticationData = {
        Password: password,
        Username: username,
      };

      const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

      const poolData = {
        ClientId: clientId,
        UserPoolId: userPoolId,
      };

      const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

      const userData = {
        Pool: userPool,
        Username: authenticationData.Username,
      };

      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess(result) {
          const accessToken = result.getAccessToken().getJwtToken();
          resolve(accessToken);
        },
        onFailure(err: { message: any }) {
          reject(err.message);
        },
      });
    });

    this.client = new GraphQLClient(this.endpoint, {
      headers: {
        Authorization: authToken,
      },
    });

    return authToken;
  }

  public async query(query: string): Promise<string> {
    return this.client.request(query);
  }
}

export default QueryManager;
