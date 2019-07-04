# appsync-cognito-query

[![Build Status](https://travis-ci.org/gdaguilarc/appsync-cognito-query.svg?branch=master)](https://travis-ci.org/gdaguilarc/appsync-cognito-query) [![Coverage Status](https://coveralls.io/repos/github/gdaguilarc/appsync-cognito-query/badge.svg?branch=master)](https://coveralls.io/github/gdaguilarc/appsync-cognito-query?branch=master)

Package that makes easier the graphql requests to appsync when the authentication method is Cognito user pools

## Getting Started

After installing the package, import the query manager as any package other package like this:

```
const acq = require('appsync-cognito-query')
```

Then we need to init the query manager and set the endpoint.

```
const manager = acq.init(YOUR_APPSYNC_ENDPOINT);
```

Then we can access the main functions of the manager. For a mutation query for example first we need to authenticate and then we can use graphql with the query method:

```
await manager.authenticateUser(
      YOUR_USER_POOL_ID,
      YOUR_CLIENT_ID,
      COGNITO_USER_USERNAME,
      COGNITO_USER_PASSWORD,
    )

const mutation = `
        mutation CreateMessage {
          createMessage(input: {
            messageChatId:"5523456789",
            id: "12345",
            content:"Message content",
            createdAt: "2019-07-01T20:26:57.761Z",
            type: "TEXT"
          }) {
          id
          content
          type
          createdAt
      }
}`;

await manager.query(mutation);
```

### Installing

This NPM package is installed such as any other one with the next command:

```
npm install appsync-cognito-query
```

## Running the tests

'''
npm run test
'''

## Built With

- [Node-fetch](https://github.com/bitinn/node-fetch) - Fetch
- [amazon-cognito-identity-js](https://github.com/amazon-archives/amazon-cognito-identity-js) - Dependency for the cognito auth
- [graphql-request](https://github.com/prisma/graphql-request) - Request Client

## Contributing

I encourage and support the open source code so I will be very happy to receive contributions.

## Authors

- **David Aguilar** - _Code_ - [gdaguilarc](https://github.com/gdaguilarc)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details
