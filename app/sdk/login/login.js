import { setAsyncStorageItem } from "../../utils/storage";
import { loginClient } from "../client/loginClient";

export const loginCustomer = async (credentials) => {
  try {
    const response = await loginClient.post("/api/login/", credentials);
    console.log(response);
    if (response.status === 200) {
      await setAsyncStorageItem("token", response.data.token);
    }
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};
