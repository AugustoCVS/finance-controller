import { useState } from "react";

export const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (): void => {
    console.log("Login");
  }

  return {
    states: {
      showPassword,
    },
    actions: {
      handleShowPassword,
      handleLogin
    }
  }
}