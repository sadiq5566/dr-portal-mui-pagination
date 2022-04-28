/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method } from "axios";

export const baseURL = "https://dev.api.deputyregistrar.net";
export const accept = "application/vnd.api+json";
export const getToken = async () => {
  return "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImpQUzRQbnlDZWR3SjdGc3pLMXoyQyJ9.eyJodHRwczovL2Rldi5kZXB1dHlyZWdpc3RyYXIubmV0L3JvbGVzIjpbIlN1cGVyLUFkbWluIl0sImlzcyI6Imh0dHBzOi8vZHItcG9ydGVyLWRldi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjBkMzgwODNmYjE0NmYwMDY5MDRkNTg2IiwiYXVkIjpbImh0dHBzOi8vZGV2LmRlcHV0eXJlZ2lzdHJhci5uZXQiLCJodHRwczovL2RyLXBvcnRlci1kZXYudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1MTE0MDA1OSwiZXhwIjoxNjUxMjI2NDU5LCJhenAiOiJReWU2ZVVralR6ZVlZZ01NTFVIS0xVa0lUZ0w3dXA3UyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6WyJhZG1pbiJdfQ.3P13mvfohRq-B7HJ3deWXjQ6M9OxQ9u9Cgk5dWZj6VGERzs699-mHWi208zID5erTylYpCf1at3wdNyG3F7B2NNK9sxlzRGxbuJWQe-aOjkiPNsbAv08ilNVVs1QwohqBQUwDV_CTwamHIC9Hsur6VaXLKd9lJwDNi2JOaA0GWMYg7YxUi7kflc3T9w1m5AFFLLVCO6caBBWW8kXocPCg5zlIH-TMOVrawF4-x6ZEeUULibDj6de1uUBJeYftzrvHTjUOWi3KnoYLXcXzeOSvTIOz4CCa58T4SrdtYWSRP9SMPvyLYNW-j1YpyZfHw_liPwSFCqQY--88E-jxCJm-Q";
};

// Create Axios body
export const axiosBody = async (methods: Method, url: string, body?: any) => {
  const token = await getToken();
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
