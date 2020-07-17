export const authCredentials = {
  clientId: "4t0g494erfhjvrt7eisuaf6dsd",
  password: "WhatsApp:1234",
  userPoolId: "us-west-2_64nwFO9M3",
  username: "WhatsApp",
};

export const endpoint =
  "https://wqclvwlqwvhxbgpyyreiddegna.appsync-api.us-west-2.amazonaws.com/graphql";

export const mutation = (id: string) => {
  return `mutation CreateMessage { createMessage(input: { messageChatId:"5523456789", id: "${id}", content:"Message content", createdAt: "2019-07-01T20:26:57.761Z", type: "TEXT" }) { id content type createdAt } }`;
};
