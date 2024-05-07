"use server";

import { LoginResponseProps } from "@/services/interfaces/auth";
import { cookies } from "next/headers";

const cookiesStore = cookies();

const saveUserInfoOnSessionCookies = (data: LoginResponseProps): void => {
  cookiesStore.set("@token", data.token);
  if (data.refreshToken) {
    cookiesStore.set("@refreshTokenId", data.refreshToken.id);
  }
};

const removeUserInfoOnSessionCookies = (): void => {
  cookiesStore.delete("@token");
  cookiesStore.delete("@refreshTokenId");
};

const getToken = async (): Promise<string | undefined> => {
  return cookiesStore.get("@token")?.value;
};

const getRefreshTokenId = async (): Promise<string | undefined> => {
  return cookiesStore.get("@refreshTokenId")?.value;
};

export {
  saveUserInfoOnSessionCookies,
  removeUserInfoOnSessionCookies,
  getToken,
  getRefreshTokenId,
};
