import { Platform } from "react-native";
import { client } from "../client/client";

export const createCustomer = async (file, payload) => {
  try {
    const formData = new FormData();

    const components = file?.uri.split("/");
    const filename = components[components.length - 1];
    console.log(filename);

    let newData = {
      name: filename,
      type: file.type,
      uri: file.uri,
    };
    formData.append("file", newData);
    formData.append("data", payload);

    const response = await client.post("/api/customers/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const getCustomers = async () => {
  try {
    const response = await client.get("/api/customers/");
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};
