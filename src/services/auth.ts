
import { api } from "./api";
import { apiAuth } from "./api-auth";
import {
  LoginRequestProps,
  LoginResponseProps,
  RegisterRequestProps,
} from "./interfaces/auth";

export const AuthService = {
  register: async (user: RegisterRequestProps) => {
    const res = await apiAuth.post("/users/register", user);

    return res.data;
  },

  login: async ({ email, password }: LoginRequestProps) => {
    const res = await apiAuth.post<LoginResponseProps>("/users/login", {
      email,
      password,
    });

    return res.data;
  },

  refreshToken: async ({
    refreshTokenId,
  }: {
    refreshTokenId: string | undefined;
  }) => {
    const res = await apiAuth.post<LoginResponseProps>("/users/refreshToken", {
      refresh_token: refreshTokenId,
    });

    return res.data;
  },

  profile: async () => {
    const res = await api.get("/users/profile");

    return res.data;
  }
};
