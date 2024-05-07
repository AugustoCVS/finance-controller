import { getToken } from "@/utils/auth";
import { InternalAxiosRequestConfig } from "axios";

export const requestInterceptor = async (config: InternalAxiosRequestConfig) => {
  const token = await getToken();

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};
