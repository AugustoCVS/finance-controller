import React from "react";
import Chart from "react-apexcharts";
import { PieChartsProps } from "./pie-charts.types";
import { usePieCharts } from "./pie-charts.hook";

export const PieCharts: React.FC<PieChartsProps> = ({ transactions }) => {
  const { states } = usePieCharts({ transactions });

  return (
    <div className="w-full items-center justify-center mt-1 flex gap-8">
      <div className="w-full max-w-[500px] text-white">
        <h2 className="text-white">Entradas</h2>
        <Chart
          options={states.incomeData.options}
          series={states.incomeData.series}
          type="donut"
        />
      </div>
      <div className="w-full max-w-[500px] text-white">
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
