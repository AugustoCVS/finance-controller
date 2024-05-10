"use client";

import React from "react";

import { useHome } from "./home.hook";
import { BalanceCards } from "./components/BalanceCards/balance-cards.component";
import { ButtonSection } from "./components/BalanceCards/components/ButtonSection/button-section.component";
import { useSummary } from "@/utils/summary";
import { TransactionCard } from "./components/TransactionCard/transaction-card.component";
import { SkeletonTransactionCard } from "./components/SkeletonTransactionCard/skeleton-transaction-card.component";
import { ModalNewTransaction } from "./components/ModalNewTransaction/modal-new-transaction.component";

export default function HomePage() {
  const { states, actions } = useHome();
  const { balanceList } = useSummary();

  return (
    <>
      <section className="w-full h-screen flex flex-col items-center bg-gray-800 pl-20">
        <ButtonSection onClick={actions.onOpen} />
        <div className="flex items-center justify-around mt-[-3rem] gap-12 ">
          {balanceList.map((balance) => {
            return (
              <BalanceCards
                key={balance.id}
                balance={balance.value}
                title={balance.title}
                isLoading={states.isPending}
              />
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-1 mt-8 w-full px-12">
          <SkeletonTransactionCard isLoading={states.isPending} />
          {states.transactions.map((transaction) => {
            return (
              <TransactionCard
                key={transaction.id}
                title={transaction.description}
                value={transaction.value}
                accountName={transaction.accountName}
                category={transaction.category}
                date={transaction.date}
                edit={() => {}}
                remove={() => {}}
              />
            );
          })}
        </div>
      </section>

      <ModalNewTransaction
        isOpen={states.isOpen}
        onOpenChange={actions.onOpenChange}
      />
    </>
  );
}
