import { client } from "../client/client";

export const getDepartments = async () => {
  try {
    const response = await client.get("/api/department/");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};
