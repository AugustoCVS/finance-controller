import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { AccountsListProps } from "./accounts-list.types";
import { AccountCard } from "./components/AccountCard/account-card.component";

export const AccountsList: React.FC<AccountsListProps> = ({
  list,
  handleOpenDeleteModal,
  handleOpenEditModal,
}) => {
  const listOfAccounts = () => {
    return list.map((account) => {
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
                handleOpenEditModal({
                  accountData: account,
                })
              }
              deleteAccount={() =>
                handleOpenDeleteModal({
                  accountData: account,
                })
              }
            />
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
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
      {listOfAccounts()}
    </Swiper>
  );
};
