/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { axiosBody } from "../ApiConfig";

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
