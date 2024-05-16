import axios from "axios";
import { responseInterceptor } from "./interceptors/ResponseInterceptor";
import { requestInterceptor } from "./interceptors/RequestInterceptor";
import { AuthService } from "./auth";
import { getRefreshTokenId, saveUserInfoOnSessionCookies } from "@/utils/auth";

const BASE_URL = process.env.BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => requestInterceptor(config),
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  async (error) => {
    const prevReq = error.config;
    const refreshTokenId = await getRefreshTokenId();

    if (error.response?.status === 401 && !prevReq._retry) {
      prevReq._retry = true;

      await AuthService.refreshToken({
        refreshTokenId: refreshTokenId,
      }).then((res) => {
        prevReq.headers["Authorization"] = `Bearer ${res.token}`;
        saveUserInfoOnSessionCookies(res);
      });

      return api.request(prevReq);
    }
    return Promise.reject(error);
  }
);

export { api };
