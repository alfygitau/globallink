import { client } from "../../sdk/client/client";

export const createPartner = async (partnerData) => {
  try {
    const response = await client.post("/api/partner/", partnerData);
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const getPartnerDetails = async (partnerId) => {
  try {
    const response = await client.get(`/api/partner/${partnerId}`);
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const createPartnersGroup = async (groupName, partners) => {
  // partners is an array of object with partners id
  try {
    const response = await client.post(`/api/partners/group/`, {
      name: groupName,
      partners: partners,
    });
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const getAllPartners = async () => {
  try {
    const response = await client.get(`/api/partner/`);
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const createPartnerType = async (partnerTypeName) => {
  try {
    const response = await client.post(`/api/partner_types/`, {
      name: partnerTypeName,
    });
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const getPartnerTypes = async () => {
  try {
    const response = await client.get(`/api/partner_types/`);
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};
