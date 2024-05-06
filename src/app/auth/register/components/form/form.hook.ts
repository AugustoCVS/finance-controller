import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { AuthService } from "@/services/auth";
import { RegisterRequestProps } from "@/services/interfaces/auth";
import { MessageUtils } from "@/utils/messages";
import { FormProps } from "./form.types";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./form.constants";

export const useRegisterForm = ({ handleCloseRegister }: FormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = (): void => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = useMutation({
    mutationFn: (data: RegisterRequestProps) => AuthService.register(data),
    onError: () => {
      MessageUtils.handleSendToast({
        message: ERROR_MESSAGE,
        type: "error",
      });
    },
    onSuccess: () => {
      MessageUtils.handleSendToast({
        message: SUCCESS_MESSAGE,
        type: "success",
      });
      setTimeout(() => {
        handleCloseRegister();
      }, 500)
    },
  });

  const onFormSubmit = (data: RegisterRequestProps) => {
    handleRegister.mutate(data);
  };

  return {
    states: {
      showPassword,
      showConfirmPassword,
    },
    actions: {
      handleShowPassword,
      handleShowConfirmPassword,
      onFormSubmit,
      handleRegister,
    },
  };
};
