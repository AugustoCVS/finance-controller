"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { AccountCard } from "./components/AccountCard/account-card.component";
import { useAccounts } from "./accounts.hook";
import { Skeleton } from "./components/Skeleton/skeleton.component";

export default function Accounts() {
  const { states } = useAccounts();

  const accountsList = () => {
    return states.data?.map((account) => {
      return (
        <SwiperSlide key={account.id}>
          <div className="flex items-center justify-center pt-12 bg-transparent">
            <AccountCard
              name={account.name}
              accountType={account.accountType}
              balance={account.balance}
              bank={account.bank}
              description={account.description}
            />
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <section className="h-full min-h-screen flex flex-col items-center bg-gray-800 pl-8 pb-8 overflow-hidden">
        <Skeleton isLoading={states.isLoading} />;
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
      </section>
    </>
  );
}
