import * as uuid from 'uuid';
import * as acq from '../index';
// import { authCredentials, endpoint, mutation } from '../variables';

// test('Auth QueryManager', async () => {
//   jest.setTimeout(10000);
//   const manager = acq.init(endpoint);
//   expect(
//     typeof (await manager.authenticateUser(
//       authCredentials.userPoolId,
//       authCredentials.clientId,
//       authCredentials.username,
//       authCredentials.password,
//     )),
//   ).toBe('string');
// });

// test('Mutation', async () => {
//   jest.setTimeout(10000);
//   const manager = acq.init(endpoint);
//   await manager.authenticateUser(
//     authCredentials.userPoolId,
//     authCredentials.clientId,
//     authCredentials.username,
//     authCredentials.password,
//   );

//   const id = uuid.v4();
//   const query = mutation(id);
//   expect(await manager.query(query)).toStrictEqual({
//     createMessage: {
//       content: 'Message content',
//       createdAt: '2019-07-01T20:26:57.761Z',
//       id,
//       type: 'TEXT',
//     },
//   });
// });

test('Client ID exists!', () => {
  expect(authCredentials.clientId).toBeDefined();
});

test('Password of client exists!', () => {
  expect(authCredentials.password).toBeDefined();
});

test('UserPool exists!', () => {
  expect(authCredentials.userPoolId).toBeDefined();
});

test('Username for queries exists!', () => {
  expect(authCredentials.username).toBeDefined();
});

test('Correct types of credentials', () => {
  expect(typeof authCredentials.clientId).toBe('string');
  expect(typeof authCredentials.password).toBe('string');
  expect(typeof authCredentials.userPoolId).toBe('string');
  expect(typeof authCredentials.username).toBe('string');
});
