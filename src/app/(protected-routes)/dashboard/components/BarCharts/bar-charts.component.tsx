"use client";

import React from "react";
import Chart from "react-apexcharts";

import { BarChartsProps } from "./bar-charts.types";
import { useBarCharts } from "./bar-charts.hook";
import { SkeletonComponent } from "@/components/commons/Skeleton/skeleton.component";

export const BarCharts: React.FC<BarChartsProps> = ({
  transactions,
  isLoading,
}) => {
  const { states } = useBarCharts({ transactions, isLoading });

  if (isLoading) {
    return (
      <div className="w-full hidden sm1:flex">
        <SkeletonComponent
          height={350}
          width="100%"
          baseColor="#323238"
          borderRadius={16}
          highlightColor="#29292E"
        />
      </div>
    );
  }

  if (transactions.length === 0 && !isLoading) return null;

  return (
    <div className="w-full hidden sm1:flex">
      <div className="w-full">
        {typeof window !== "undefined" && (
          <Chart
            options={states.chartsOptions.options}
            series={states.chartsOptions.series}
            type="bar"
            height={350}
          />
        )}
      </div>
    </div>
  );
};
