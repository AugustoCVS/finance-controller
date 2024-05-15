import React from "react";
import Chart from "react-apexcharts";
import { ChartsProps } from "./charts.types";

export const Charts: React.FC<ChartsProps> = ({ labels, values }) => {
  const chartOptions = {
    series: values,
    options: {
      chart: {
        type: "donut" as const,
        height: 400,
      },
      labels: labels,
      plotOptions: {
        pie: {
          donut: {
            size: "50%",
          },
        },
      },
      colors: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom" as const,
            },
          },
        },
      ],
    },
  };

  return (
    <div className="w-full max-w-[400px] mt-8">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="donut"
      />
    </div>
  );
};
