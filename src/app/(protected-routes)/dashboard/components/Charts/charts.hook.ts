import { priceFormatter } from "@/utils/formaters";
import { ChartsProps } from "./charts.types";
import { ApexOptions } from "apexcharts";

export const useCharts = ({ expenseByBank, incomeByBank }: ChartsProps) => {
  const totalIncome = Object.values(incomeByBank).reduce(
    (acc, val) => acc + val,
    0
  );
  const totalExpense = Object.values(expenseByBank).reduce(
    (acc, val) => acc + val,
    0
  );

  const incomeData = {
    series: Object.values(incomeByBank),
    options: {
      chart: {
        type: "donut",
        height: 500,
        width: 600,
      },
      labels: Object.keys(incomeByBank),
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false,
        },
        style: {
          colors: ["#FFFFFF"],
        },
        formatter: (val) => priceFormatter.format(Number(val)),
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                color: "#FFFFFF",
              },
              value: {
                show: true,
                color: "#FFFFFF",
                formatter: (val) => priceFormatter.format(Number(val)),
              },
              total: {
                show: true,
                label: "Total",
                color: "#FFFFFF",
                formatter() {
                  return priceFormatter.format(totalIncome);
                },
                style: {
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: 600,
                },
              },
            },
          },
        },
      },
    } as ApexOptions,
  };

  const expenseData = {
    series: Object.values(expenseByBank),
    options: {
      chart: {
        type: "donut",
        height: 500,
        width: 600,
      },
      labels: Object.keys(expenseByBank),
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false,
        },
        style: {
          colors: ["#FFFFFF"],
        },
        formatter: (val) => priceFormatter.format(Number(val)),
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                color: "#FFFFFF",
              },
              value: {
                show: true,
                color: "#FFFFFF",
                formatter: (val) => priceFormatter.format(Number(val)),
              },
              total: {
                show: true,
                label: "Total",
                color: "#FFFFFF",
                formatter() {
                  return priceFormatter.format(totalExpense);
                },
                style: {
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: 600,
                },
              },
            },
          },
        },
      },
    } as ApexOptions,
  };

  return {
    states: {
      incomeData,
      expenseData,
    },
  };
};
