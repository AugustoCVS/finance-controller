"use client";

import { useHeader } from "./header.hook";

export const Header: React.FC = () => {
  const { states, actions } = useHeader();

  if (states.pathName === "/") return null;

  return (
    <header className="w-full h-32 flex items-center justify-center bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-100 text-center">
        {actions.handleTransformPathName()}
      </h1>
    </header>
  );
};
