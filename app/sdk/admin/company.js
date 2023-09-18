import { client } from "../client/client";

export const getComapanies = async () => {
  try {
    const response = await client.get("/api/company/");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};
