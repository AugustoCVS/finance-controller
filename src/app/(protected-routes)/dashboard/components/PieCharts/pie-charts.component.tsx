import React from "react";
import Chart from "react-apexcharts";
import { PieChartsProps } from "./pie-charts.types";
import { usePieCharts } from "./pie-charts.hook";
import { SkeletonComponent } from "@/components/commons/Skeleton/skeleton.component";

export const PieCharts: React.FC<PieChartsProps> = ({
  transactions,
  isLoading,
}) => {
  const { states } = usePieCharts({ transactions, isLoading });

  if (isLoading) {
    return (
      <div className="w-full items-center justify-center mt-1 hidden sm1:flex flex-col md1:flex-row gap-8">
        <SkeletonComponent
          height={350}
          width={350}
          baseColor="#323238"
          borderRadius="100%"
          highlightColor="#29292E"
        />
        <SkeletonComponent
          height={350}
          width={350}
          baseColor="#323238"
          borderRadius="100%"
          highlightColor="#29292E"
        />
      </div>
    );
  }

  if (transactions.length === 0 && !isLoading) return null;

  return (
    <div className="w-full items-center justify-center mt-1 hidden sm1:flex flex-col md1:flex-row gap-8">
      <div className="w-full max-w-[400px] md1:max-w-[500px]">
        <h2 className="text-white">Entradas</h2>
        <Chart
          options={states.incomeData.options}
          series={states.incomeData.series}
          type="donut"
        />
      </div>
      <div className="w-full max-w-[400px] md1:max-w-[500px]">
        <h2 className="text-white">Saídas</h2>
        <Chart
          options={states.expenseData.options}
          series={states.expenseData.series}
          type="donut"
        />
      </div>
    </div>
  );
};
