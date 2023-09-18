import { client } from "../client/client";

export const viewAdminUsers = async () => {
  try {
    const response = await client.get("/api/users/");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};

export const getAdminUser = async (id) => {
  try {
    const response = await client.get(`/api/users/${id}/`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};
