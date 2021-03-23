import client from "./client";

const register = (pushToken) =>
  client.post("/expoPushTokens", { token: pushToken.data });

export default {
  register,
};
