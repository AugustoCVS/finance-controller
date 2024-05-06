import { useState } from "react";

export const useLandingPage = () => {
  const [showRegister, setShowRegister] = useState<boolean>(false);

  const handleToggleRegister = (): void => {
    setShowRegister(!showRegister);
  };

  return {
    states: {
      showRegister,
    },
    actions: {
      handleToggleRegister,
    }
  }
}