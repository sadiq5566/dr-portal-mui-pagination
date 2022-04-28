/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method } from "axios";

export const baseURL = "https://dev.api.deputyregistrar.net";
export const accept = "application/vnd.api+json";
export const getToken = async () => {
  return "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImpQUzRQbnlDZWR3SjdGc3pLMXoyQyJ9.eyJodHRwczovL2Rldi5kZXB1dHlyZWdpc3RyYXIubmV0L3JvbGVzIjpbIlN1cGVyLUFkbWluIl0sImlzcyI6Imh0dHBzOi8vZHItcG9ydGVyLWRldi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjBkMzgwODNmYjE0NmYwMDY5MDRkNTg2IiwiYXVkIjpbImh0dHBzOi8vZGV2LmRlcHV0eXJlZ2lzdHJhci5uZXQiLCJodHRwczovL2RyLXBvcnRlci1kZXYudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1MTA1MzA0NSwiZXhwIjoxNjUxMTM5NDQ1LCJhenAiOiJReWU2ZVVralR6ZVlZZ01NTFVIS0xVa0lUZ0w3dXA3UyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6WyJhZG1pbiJdfQ.umJlaRMvRli5ovktlE_cyskhV6yj4dNHDrRwqnP0e8EH6KIyRKT_9o0_0ZYzPkWd3ERJahaNFkjVhPyxmZ-rSXg4zcTldHopUfsnApzU2pqdBB1NeKhpKVeXxikp-pkO1_g7C3HkffTiYCaH6vAq91cevctTU6Fzroho0TMxl6clIe9ree9PpMC4iYTXXdqF-WnBujQ1Q9qxBvFZ8Mp1tQyOrnC0H-y3EuLq8kgU5dA10Hin_7MkJ5yv4lmaZV_ucxXK96Nky0IHeKK5bcvRa7eGRSdqQbTqLkKATef5WhBI_HV_9cioBA6eWHtLrLAq2FqwUFpm1ZIwh3ugLQs1uw";
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
