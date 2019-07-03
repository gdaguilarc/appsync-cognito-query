import * as uuid from 'uuid';
import QueryManager from '../index';
import { authCredentials, endpoint, mutation } from '../variables';

test('Auth QueryManager', async () => {
  const manager = new QueryManager(endpoint);
  expect(
    typeof (await manager.authenticateUser(
      authCredentials.userPoolId,
      authCredentials.clientId,
      authCredentials.username,
      authCredentials.password,
    )),
  ).toBe('string');
});

test('Mutation', async () => {
  const manager = new QueryManager(endpoint);
  await manager.authenticateUser(
    authCredentials.userPoolId,
    authCredentials.clientId,
    authCredentials.username,
    authCredentials.password,
  );

  const id = uuid.v4();
  const query = mutation(id);
  expect(await manager.query(query)).toStrictEqual({
    createMessage: {
      content: 'Message content',
      createdAt: '2019-07-01T20:26:57.761Z',
      id,
      type: 'TEXT',
    },
  });
});
