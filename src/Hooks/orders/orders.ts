/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { axiosBody } from "../ApiConfig";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import { OrderResponse } from "../../Interfaces/orderInterface";
import { API_URL } from "../../Config/constant/contant";

export const useOrders = async () => {
  const { getAccessTokenSilently } = useAuth0();
  const token = await getAccessTokenSilently();

  return useQuery<OrderResponse, Error>(["orders"], async () => {
    const response = await fetch(`${API_URL}/order`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) {
      console.log("error", response);
      throw new Error(response.statusText);
    }
    console.log("sucess", response);
    return response.json();
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
    // new Error(err?.message || "Something went wrong");
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
