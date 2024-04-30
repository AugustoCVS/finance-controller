"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

export const ReduxStore: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
