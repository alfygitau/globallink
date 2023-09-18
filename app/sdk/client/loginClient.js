import axios from "axios";

function httpClient(baseURL) {
  const baseClient = axios.create({
    baseURL,
    timeout: 10000,
  });
  baseClient.interceptors.request.use(async (request) => {
    return {
      ...request,
      headers: {
        ...request.headers,
      },
    };
  });

  return baseClient;
}

export const loginClient = httpClient("http://3.87.245.245");
