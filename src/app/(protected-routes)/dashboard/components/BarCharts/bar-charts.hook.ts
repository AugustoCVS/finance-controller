import { ApexOptions } from "apexcharts";
import { BarChartsProps } from "./bar-charts.types";
import { TransactionsProps } from "@/services/interfaces/transactions";
import { priceFormatter } from "@/utils/formaters";

export const useBarCharts = ({ transactions }: BarChartsProps) => {
  const calculateValuesByCategory = (
    transactions: TransactionsProps[]
  ): Record<string, number> => {
    return transactions.reduce((acc: Record<string, number>, transaction: TransactionsProps) => {
      if (!acc[transaction.category]) {
        acc[transaction.category] = 0;
      }
      if (transaction.value < 0) {
        acc[transaction.category] += Math.abs(transaction.value);
      }
      return acc;
    }, {});
  };

  const valuesByCategory = calculateValuesByCategory(transactions);
  const categories = Object.keys(valuesByCategory);
  const seriesData = Object.values(valuesByCategory);

  const chartsOptions = {
    series: [
      {
        name: "Despesas",
        data: seriesData.map((value) => ({
          x: categories[seriesData.indexOf(value)],
          y: value,
        })),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: categories,
        labels: {
          formatter: function (val) {
            return priceFormatter.format(Number(val));
          },
        },
      },
    } as ApexOptions,
  };


  return {
    states: {
      chartsOptions,
    }
  }
}