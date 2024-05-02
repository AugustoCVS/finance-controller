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

  const handleRegister = (): void => {
    console.log("Login");
  }

  return {
    states: {
      showPassword,
      showConfirmPassword,
    },
    actions: {
      handleShowPassword,
      handleShowConfirmPassword,
      handleRegister,
    }
  }
}