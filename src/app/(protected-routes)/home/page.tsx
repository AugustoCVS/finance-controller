"use client";

import React from "react";
import { useHome } from "./home.hook";

export default function HomePage() {
  const { states } = useHome();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1>Home</h1>
    </div>
  );
}
