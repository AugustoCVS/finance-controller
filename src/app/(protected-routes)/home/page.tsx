"use client";

import React from "react";
import { useHome } from "./home.hook";

export default function HomePage() {
  const { states } = useHome();

  return <section className="w-full flex flex-col items-center"></section>;
}
