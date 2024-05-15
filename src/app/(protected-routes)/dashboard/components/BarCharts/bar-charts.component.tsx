import React from "react";
import Chart from "react-apexcharts";

import { BarChartsProps } from "./bar-charts.types";
import { useBarCharts } from "./bar-charts.hook";

export const BarCharts: React.FC<BarChartsProps> = ({ transactions }) => {
  const { states } = useBarCharts({ transactions });

  return (
    <div className="w-full">
      <div id="chart">
        <Chart
          options={states.chartsOptions.options}
          series={states.chartsOptions.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
