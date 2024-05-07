'use server'

import { LoginResponseProps } from "@/services/interfaces/auth";
import { cookies } from "next/headers";

const saveUserInfoOnSessionCookies = (data: LoginResponseProps): void => {
  cookies().set("@token", data.token);
  if (data.refreshToken) {
    cookies().set("@refreshTokenId", data.refreshToken.id);
  }
};

const getToken = async (): Promise<string | undefined> => {
  return cookies().get("@token")?.value;
};

const getRefreshTokenId = async (): Promise<string | undefined> => {
  return cookies().get("@refreshTokenId")?.value;
};

export {
  saveUserInfoOnSessionCookies,
  getToken,
  getRefreshTokenId,
};