/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, Method } from "axios";
import { BASE_URL } from "../Config/constant/contant";

export const accept = "application/vnd.api+json";

let fetchToken;

// Create Axios body
export const axiosBody = async (methods: Method, url: string, body?: any) => {
  const config: AxiosRequestConfig = {
    method: methods,
    url: `${BASE_URL}${url}`,
    headers: {
      Authorization: `Bearer ${fetchToken()}`,
      "Content-Type": "application/json"
    },
    data: JSON.stringify(body)
  };
  return config;
};
