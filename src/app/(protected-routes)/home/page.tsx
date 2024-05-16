"use client";

import React from "react";

import { useHome } from "./home.hook";
import { ModalNewTransaction } from "./components/ModalNewTransaction/modal-new-transaction.component";
import { ModalEditTransaction } from "./components/ModalEditTransaction/modal-edit-transaction.component";
import { ModalDelete } from "@/components/commons/ModalDelete/modal-delete.component";
import { TransactionCard } from "@/components/commons/TransactionCard/transaction-card.component";
import { SkeletonTransactionCard } from "@/components/commons/SkeletonTransactionCard/skeleton-transaction-card.component";
import { Balance } from "./components/Balance/balance.component";
import { ButtonSection } from "./components/Balance/components/BalanceCards/components/ButtonSection/button-section.component";

export default function HomePage() {
  const { states, actions } = useHome();

  return (
    <>
      <section className="w-full h-full min-h-screen flex flex-col items-center bg-gray-800 pl-20 pb-8">
        <ButtonSection onClick={actions.handleOpenNewModal} />
        <Balance isLoading={states.isPending} />

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
                edit={() =>
                  actions.handleOpenEditModal({
                    transactionData: transaction,
                  })
                }
                remove={() =>
                  actions.handleOpenDeleteModal({
                    transactionData: transaction,
                  })
                }
              />
            );
          })}
        </div>
      </section>

      <ModalNewTransaction
        userId={states.user.id}
        isOpen={states.isOpen}
        onOpenChange={actions.onOpenChange}
        handleGetTransactions={actions.handleGetTransactions}
      />

      {states.transaction && (
        <>
          <ModalEditTransaction
            userId={states.user.id}
            isOpen={states.isEditModalOpen}
            onOpenChange={actions.onEditModalOpenChange}
            handleGetTransactions={actions.handleGetTransactions}
            transactionData={states.transaction}
          />

          <ModalDelete
            isOpen={states.isDeleteModalOpen}
            onOpenChange={actions.onDeleteModalOpenChange}
            handleDelete={actions.handleDeleteTransaction}
            loading={states.deleteTransaction.isPending}
            title="Deseja deletar esta transação?"
          />
        </>
      )}
    </>
  );
}
