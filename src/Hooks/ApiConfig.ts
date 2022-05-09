/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method } from "axios";

export const baseURL = "https://dev.api.deputyregistrar.net";
export const accept = "application/vnd.api+json";

let fetchToken;

export const getToken = async (getAccessTokenSilently) => {
  fetchToken = await getAccessTokenSilently;

  return fetchToken;
};

// Create Axios body
export const axiosBody = async (methods: Method, url: string, body?: any) => {
  const token = await fetchToken();

  const config: AxiosRequestConfig = {
    method: methods,
    url: `${baseURL}${url}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    // Accept: "application/vnd.api+json",
    data: JSON.stringify(body)
  };
  return config;
};
