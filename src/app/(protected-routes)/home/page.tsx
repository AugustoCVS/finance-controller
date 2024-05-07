"use client";

import React from "react";
import { useHome } from "./home.hook";
import { BalanceCards } from "./components/BalanceCards/balance-cards.component";

export default function HomePage() {
  const { states } = useHome();

  const BalanceList = [
    {
      id: 1,
      title: "Entradas",
      value: 1000,
    },
    {
      id: 2,
      title: "Saidas",
      value: 500,
    },
    {
      id: 3,
      title: "Total",
      value: 500,
    },
  ];

  return (
    <section className="w-full h-screen flex flex-col items-center bg-gray-800">
      <div className="flex items-center justify-around mt-[-4rem] gap-12">
        {BalanceList.map((balance) => {
          return (
            <BalanceCards
              key={balance.id}
              balance={balance.value}
              title={balance.title}
            />
          );
        })}
      </div>
    </section>
  );
}
