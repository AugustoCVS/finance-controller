import React from "react";
import Chart from "react-apexcharts";
import { ChartsProps } from "./charts.types";
import { useCharts } from "./charts.hook";

export const Charts: React.FC<ChartsProps> = ({
  incomeByBank,
  expenseByBank,
}) => {
  const { states } = useCharts({ incomeByBank, expenseByBank });

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
