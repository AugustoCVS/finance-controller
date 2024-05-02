"use client";

import { CircleDollarSign } from "lucide-react";
import { Login } from "./auth/login/login.auth";
import { useLandingPage } from "./hook";
import { AnimatePresence } from "framer-motion";
import { Register } from "./auth/register/register.auth";

export default function LandingPage() {
  const { states, actions } = useLandingPage();

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-2/4 bg-gray-700 h-screen flex items-center justify-center">
        <CircleDollarSign size={120} color="#E1E1E6" />
      </div>

      <div className="w-2/4 h-screen flex items-center justify-center">
        <Login handleShowRegister={actions.handleToggleRegister} />
      </div>

      <AnimatePresence>
        {states.showRegister && (
          <Register handleCloseRegister={actions.handleToggleRegister} />
        )}
      </AnimatePresence>
    </div>
  );
}
