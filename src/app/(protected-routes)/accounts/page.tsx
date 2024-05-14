"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { AccountCard } from "./components/AccountCard/account-card.component";
import { useAccounts } from "./accounts.hook";
import { Skeleton } from "./components/Skeleton/skeleton.component";
import { Button } from "@/components/commons/Button/button.component";
import { ModalNewAccount } from "./components/ModalNewAccount/modal-new-account.component";
import { ModalEditAccount } from "./components/ModalEditAccount/modal-edit-account.component";

export default function Accounts() {
  const { states, actions } = useAccounts();

  const accountsList = () => {
    return states.handleGetAccounts.data?.map((account) => {
      return (
        <SwiperSlide key={account.id}>
          <div className="flex items-center justify-center pt-12 bg-transparent">
            <AccountCard
              name={account.name}
              accountType={account.accountType}
              balance={account.balance}
              bank={account.bank}
              description={account.description}
              editAccount={() =>
                actions.handleOpenEditModal({ accountData: account })
              }
              deleteAccount={() => actions.handleOpenDeleteModal()}
            />
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <section className="h-full min-h-screen flex flex-col items-center bg-gray-800 pl-8 pb-8 overflow-hidden">
        <Skeleton isLoading={states.handleGetAccounts.isLoading} />;
        <Swiper
          slidesPerView={1}
          className="w-screen"
          pagination={true}
          modules={[Pagination]}
          style={
            {
              "--swiper-pagination-color": "#D9D9D9",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
            } as React.CSSProperties
          }
        >
          {accountsList()}
        </Swiper>
        <div className="pl-12 mt-8 w-2/6">
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
        <ModalEditAccount
          isOpen={states.isEditModalOpen}
          onOpenChange={states.onEditModalOpenChange}
          userId={states.user.id}
          accountData={states.accountData}
          handleGetTransactions={states.handleGetAccounts.refetch}
        />
      )}
    </>
  );
}
