"use client";
import React from "react";

import { useAccounts } from "./accounts.hook";
import { Skeleton } from "./components/Skeleton/skeleton.component";
import { Button } from "@/components/commons/Button/button.component";
import { ModalNewAccount } from "./components/ModalNewAccount/modal-new-account.component";
import { ModalEditAccount } from "./components/ModalEditAccount/modal-edit-account.component";
import { ModalDelete } from "@/components/commons/ModalDelete/modal-delete.component";
import { AccountsList } from "./components/AccountsList/accounts-list.component";

export default function Accounts() {
  const { states, actions } = useAccounts();

  const accounts = states.handleGetAccounts.data;

  return (
    <>
      <section className="h-full min-h-screen flex flex-col items-center bg-gray-800 pl-8 pb-8 overflow-hidden">
        <Skeleton isLoading={states.handleGetAccounts.isLoading} />;
        {accounts && (
          <AccountsList
            list={accounts}
            handleOpenDeleteModal={actions.handleOpenDeleteModal}
            handleOpenEditModal={actions.handleOpenEditModal}
          />
        )}
        <div className="pl-12 mt-8 xsm:w-full md:w-2/6">
          <Button
            className="w-full items-center justify-center p-3 border bg-green-300 text-gray-100 font-regular hover:bg-green-500 rounded-lg border-none"
            onClick={actions.handleOpenNewAccountModal}
          >
            Cadastrar Nova Carteira
          </Button>
        </div>
      </section>

      <ModalNewAccount
        isOpen={states.isOpen}
        onOpenChange={states.onOpenChange}
        userId={states.user.id}
        handleGetTransactions={states.handleGetAccounts.refetch}
      />

      {states.accountData && (
        <>
          <ModalEditAccount
            isOpen={states.isEditModalOpen}
            onOpenChange={states.onEditModalOpenChange}
            userId={states.user.id}
            accountData={states.accountData}
            handleGetTransactions={states.handleGetAccounts.refetch}
          />

          <ModalDelete
            isOpen={states.isDeleteModalOpen}
            onOpenChange={states.onDeleteModalOpenChange}
            handleDelete={actions.handleDeleteAccount}
            loading={states.deleteAccount.isPending}
            title="Deseja deletar esta conta?"
          />
        </>
      )}
    </>
  );
}
