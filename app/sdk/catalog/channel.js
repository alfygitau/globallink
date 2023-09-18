import { client } from "../client/client";

export const getChannels = async () => {
  try {
    const response = await client.get("/api/channels/");
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};
