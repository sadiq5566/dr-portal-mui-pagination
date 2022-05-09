/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { axiosBody } from "../ApiConfig";
import { useQuery } from "react-query";
import { OrderResponse, OrdersQueryFilters } from "../../Interfaces/orderInterface";
import { BASE_URL } from "../../Config/constant/contant";

let fetchToken;

export const getTokens = async (getAccessTokenSilently) => {
  fetchToken = await getAccessTokenSilently();
  return fetchToken;
};

export const useOrders = (debouncedFilters?: OrdersQueryFilters) => {
  return useQuery<OrderResponse, Error>(["orders"], async () => {
    console.log("token", fetchToken);
    const response = await fetch(`${BASE_URL}/order`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${fetchToken}`,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const { data } = await response.json();
    return data;
  });
};

// Get complete orderlist
export const getAllOrders = async () => {
  try {
    const config = await axiosBody("GET", "/api/v2/order");
    const response = await axios(config);
    if (response) {
      return response?.data;
    }
  } catch (err) {
    return err ? err : "Something wen wrong";
  }
};
export const getOrderByID = async (id: any) => {
  console.log(id);
  try {
    const config = await axiosBody("GET", `/api/v2/order/${id}`);
    const response = await axios(config);
    if (response) {
      return response?.data;
    }
  } catch (err) {
    // new Error(err?.message || "Something went wrong");
    return err ? err : "Something wen wrong";
  }
};
