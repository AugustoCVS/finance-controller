import { RootState } from "@/redux/store";
import { TransactionType } from "@/services/interfaces/transactions";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useSummary = () => {
  const transactions = useSelector((state: RootState) => state.transactions);

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        const transactionPrice = transaction.value;

        if (transaction.type === TransactionType.INCOME) {
          acc.income += transactionPrice;
          acc.total += transactionPrice;
        } else {
          acc.outcome += transactionPrice;
          acc.total += transactionPrice;
        }

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );
  }, [transactions]);

  const balanceList = [
    {
      id: 1,
      title: "Entradas",
      value: summary.income,
    },
    {
      id: 2,
      title: "Saidas",
      value: summary.outcome,
    },
    {
      id: 3,
      title: "Total",
      value: summary.total,
    },
  ];

  return {
    balanceList,
  };
};
