import { AuthService } from "@/services/auth";
import { RegisterRequestProps } from "@/services/interfaces/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const useRegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);	

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = (): void => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = useMutation({
    mutationFn: (data: RegisterRequestProps) => AuthService.register(data),
    onError: (err: Error) => {
      console.error(err);
    },
    onSuccess: () => {
      console.log('success');
    },
  });

  const onFormSubmit = (data: RegisterRequestProps) => {
    handleRegister.mutate(data);
  };

  console.log(handleRegister.isPending);

  return {
    states: {
      showPassword,
      showConfirmPassword,
    },
    actions: {
      handleShowPassword,
      handleShowConfirmPassword,
      onFormSubmit,
    }
  }
}