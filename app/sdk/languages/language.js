import axios from "axios";
import { loginClient } from "../client/loginClient";

const options = {
  method: 'GET',
  url: 'https://text-translator2.p.rapidapi.com/getLanguages',
  headers: {
    'X-RapidAPI-Key': '668789db1bmsh307a14da308a791p1eb6fdjsn41b5a3c35d23',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  }
};
export const getAllLanguages = async () => {
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};
