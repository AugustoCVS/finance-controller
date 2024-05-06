"use server";

import { LoginResponseProps } from "@/services/interfaces/auth";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

const cookiesStore = cookies();

const saveUserInfoOnSessionCookies = (data: LoginResponseProps): void => {
  cookiesStore.set("@token", data.token, { httpOnly: true, secure: true });
  cookiesStore.set("@refreshTokenId", data.refreshToken.id, {
    httpOnly: true,
    secure: true,
  });
};

const removeUserInfoOnSessionCookies = (): void => {
  cookiesStore.delete("@token");
  cookiesStore.delete("@refreshTokenId");
};

const getToken = (): RequestCookie | undefined => {
  return cookiesStore.get("@token");
};

const getRefreshTokenId = (): RequestCookie | undefined => {
  return cookiesStore.get("@refreshTokenId");
};

export {
  saveUserInfoOnSessionCookies,
  removeUserInfoOnSessionCookies,
  getToken,
  getRefreshTokenId,
};
