"use client";

import { AnimatePresence } from "framer-motion";
import { CircleDollarSign } from "lucide-react";

import { useLandingPage } from "./landing-page.hook";
import { Login } from "@/app/auth/login/login.auth";
import { Register } from "@/app/auth/register/register.auth";

export default function LandingPage() {
  const { states, actions } = useLandingPage();

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-2/4 bg-gray-700 h-screen hidden md:flex items-center justify-center">
        <CircleDollarSign size={120} color="#E1E1E6" />
      </div>

      <div className="w-3/4 md:w-2/4 h-screen flex items-center justify-center">
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
