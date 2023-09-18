import axios from "axios";
import { getAsyncStorageItem } from "../../utils/storage";

function httpClient(baseURL) {
  const baseClient = axios.create({
    baseURL,
    timeout: 10000,
  });
  baseClient.interceptors.request.use(async (request) => {
    const accessToken = await getAsyncStorageItem("token");
    return {
      ...request,
      headers: {
        ...request.headers,
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
    };
  });

  return baseClient;
}

export const client = httpClient("http://3.87.245.245");
