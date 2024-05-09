"use client";

import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setUser } from "@/redux/slices/User/user.slice";
import { UserResponseProps } from "@/services/interfaces/user";
import { UserService } from "@/services/user";
import { getToken } from "@/utils/auth";
import { MessageUtils } from "@/utils/messages";

interface ITokenPayload {
  exp: number;
  sub: string;
}

const ERROR_MESSAGE = "Erro ao buscar os dados do usuário";

export const UserInfo: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();

  const handleGetUser = async (): Promise<void> => {
    const token = await getToken();
    const userId = jwtDecode<ITokenPayload>(token!).sub;

    await UserService.getUser({ id: userId })
      .then((res) => {
        dispatch(setUser(res));
      })
      .catch(() => {
        MessageUtils.handleSendToast({
          message: ERROR_MESSAGE,
          type: "error",
        });
      });
  };

  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      await handleGetUser();
      return null;
    },
  });

  return <>{children}</>;
};
