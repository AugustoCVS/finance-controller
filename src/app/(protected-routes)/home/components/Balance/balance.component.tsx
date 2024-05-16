import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useSummary } from "@/utils/summary";
import { BalanceCards } from "./components/BalanceCards/balance-cards.component";
import { SkeletonComponent } from "@/components/commons/Skeleton/skeleton.component";

export const Balance: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const { balanceList } = useSummary();

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-around mt-[-3rem] gap-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex flex-col rounded-md gap-3" key={index}>
            <SkeletonComponent
              key={index}
              height={128}
              width={320}
              baseColor="#323238"
              borderRadius={6}
              highlightColor="#29292E"
            />
          </div>
        ))}
      </div>
    );
  }

  const renderBalanceCards = () => {
    return balanceList.map((balance) => {
      return (
        <div>
          <SwiperSlide key={balance.id}>
            <div className="w-full flex items-center justify-center">
              <BalanceCards balance={balance.value} title={balance.title} />
            </div>
          </SwiperSlide>
        </div>
      );
    });
  };

  return (
    <div className="w-full flex items-center justify-center mt-[-3rem] gap-12">
      <Swiper
        slidesPerView={3}
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
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          820: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >
        {renderBalanceCards()}
      </Swiper>
    </div>
  );
};
