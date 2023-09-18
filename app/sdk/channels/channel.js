import { client } from "../client/client";

export const getAllActiveChannels = async () => {
  try {
    const response = await client.get(`/api/channels/?status=Active/`);
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const createChannel = async (channelName, channelDescription) => {
  try {
    const response = await client.post(`/api/channels/`, {
      name: channelName,
      description: channelDescription,
    });
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const getAllChannels = async () => {
  try {
    const response = await client.get(`/api/channels/`);
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const getChannelDetails = async (channelId) => {
  try {
    const response = await client.get(`/api/channels/${channelId}/`);
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const updateChannelDetails = async (channelId, channelData) => {
  try {
    const response = await client.get(
      `/api/channels/${channelId}/`,
      channelData
    );
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};
