import { client } from "../client/client";

export const getProducts = async () => {
  try {
    const response = await client.get("/api/products/");
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};

export const getProductsOfChannel = async (channelId) => {
  try {
    const response = await client.get(`/api/products/?channel=${channelId}`);
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await client.delete(`/api/products/${productId}/`);
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};

export const getSingleProduct = async (productId) => {
  try {
    const response = await client.get(`/api/products/${productId}/`);
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};

export const uploadProductImage = async (imageUri, productId) => {
  try {
    const formData = new FormData();
    formData.append("file", imageUri);
    formData.append("id", productId);
    const response = await client.post("/api/product_images/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};

export const getProductFiles = async (productId) => {
  try {
    const response = await client.get(`/api/product/files/?product=${productId}`);
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};
