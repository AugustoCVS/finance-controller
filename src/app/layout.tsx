import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/styles/globals.css";
import { ReduxStore } from "@/providers/ReduxStore";
import { ReactQuery } from "@/providers/ReactQuery";
import { Menu } from "@/components/layout/Menu/menu.component";
import { Header } from "@/components/layout/Header/header.component";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance Controller",
  description: "Created by AGT | DEVELOPER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxStore>
          <ReactQuery>
            <Menu />
            <Header />
            {children}
            <ToastContainer />
          </ReactQuery>
        </ReduxStore>
      </body>
    </html>
  );
}
