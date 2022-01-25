import axios from "axios";
import { baseURL, tokenName } from "../utils/constants";

export const publicApi = axios.create({
  baseURL,
});

export const privateApi = axios.create({
  baseURL,
});

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem(tokenName) ?? "NOTOKEN";
  config.headers!.Authorization = `Bearer ${token}`;

  return config;
});
