"use server";

import { LoginResponseProps } from "@/services/interfaces/auth";
import { cookies } from "next/headers";

const cookiesStore = cookies();

const saveUserInfoOnSessionCookies = (data: LoginResponseProps): void => {
  cookiesStore.set("@token", data.token, { httpOnly: true, secure: true});
  cookiesStore.set("@refreshTokenId", data.refreshToken.id, { httpOnly: true, secure: true});
};

export { saveUserInfoOnSessionCookies };
