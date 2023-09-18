import { client } from "../client/client";

export const createCategory = async (category) => {
  try {
    const response = await client.post("/api/category/", category);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await client.get("/api/category/");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createSubCategory = async (subcategory) => {
  try {
    const response = await client.post("/api/subcategory/", subcategory);
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};

export const getSubCategories = async () => {
  try {
    const response = await client.get("/api/subcategory/");
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};

export const getSubCategoriesOfCategory = async (categoryId) => {
  try {
    const response = await client.get(
      `/api/subcategory/?category=${categoryId}`
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};
