"use client";

import { usePathname } from "next/navigation";
import { Header } from "./components/Header/header.component";
import { Options } from "./components/Options/options.component";
import { Profile } from "./components/Profile/profile.component";

export const Menu: React.FC = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="w-20 h-full bg-gray-600 flex flex-col items-center justify-between fixed top-0 left-0 z-50 py-4">
      <div className="w-full flex flex-col items-center">
        <Header />
        <Options />
      </div>
      <Profile />
    </div>
  );
};
