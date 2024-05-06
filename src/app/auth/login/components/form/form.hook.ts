import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { AuthService } from "@/services/auth";
import { LoginRequestProps } from "@/services/interfaces/auth";
import { MessageUtils } from "@/utils/messages";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./form.constants";
import { saveUserInfoOnSessionCookies } from "@/utils/auth";

export const useLoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const navigateToHome = (): void => {
    setTimeout(() => {
      router.push("/home");
    }, 100)
  }

  const handleLogin = useMutation({
    mutationFn: async (data: LoginRequestProps) =>
      AuthService.login({
        email: data.email,
        password: data.password,
      }),
    onError: () => {
      MessageUtils.handleSendToast({
        message: ERROR_MESSAGE,
        type: "error",
      });
    },
    onSuccess: (res) => {
      MessageUtils.handleSendToast({
        message: SUCCESS_MESSAGE,
        type: "success",
      });
      saveUserInfoOnSessionCookies(res);
      navigateToHome();
    },
  });

  const handleChangePassword = (): void => {
    MessageUtils.handleSendToast({
      message: "Funcionalidade em desenvolvimento",
      type: "error",
    });
  };

  const onFormSubmit = (data: LoginRequestProps): void => {
    handleLogin.mutate(data);
  };

  return {
    states: {
      showPassword,
    },
    actions: {
      handleChangePassword,
      handleShowPassword,
      handleLogin,
      onFormSubmit,
    },
  };
};
