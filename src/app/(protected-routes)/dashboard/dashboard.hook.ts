import { RootState } from "@/redux/store";
import { TransactionsService } from "@/services/transactions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FilterProps } from "./dashboard.types";
import {
  TransactionCategory,
  TransactionsProps,
} from "@/services/interfaces/transactions";
import { AccountService } from "@/services/account";

export const useDashboard = () => {
  const user = useSelector((state: RootState) => state.user);

  const [filter, setFilter] = useState<FilterProps>({
    accountId: "",
    category: "" as TransactionCategory,
  });

  const getTransactions = useQuery({
    queryKey: ["transactions", filter],
    queryFn: async () => {
      return await TransactionsService.getTransactions({
        userId: user.id,
        accountId: filter.accountId,
        category: filter.category,
      });
    },
  });

  const getAccounts = useQuery({
    queryKey: ["accounts", user.id],
    queryFn: async () => {
      return await AccountService.getAccounts({
        userId: user.id,
      });
    },
  });

  const handleClearFilter = () => {
    setFilter({
      accountId: "",
      category: "" as TransactionCategory,
    });
  };

  const transactions = getTransactions.data?.transactions || [];

  const CalculateValuesByBank = transactions.reduce(
    (acc: Record<string, number>, transaction: TransactionsProps) => {
      if (!acc[transaction.accountName]) {
        acc[transaction.accountName] = 0;
      }
      acc[transaction.accountName] += transaction.value;
      return acc;
    },
    {}
  );

  const banks = Object.keys(CalculateValuesByBank);
  const valuesByBank = Object.values(CalculateValuesByBank);

  return {
    states: {
      getTransactions,
      getAccounts,
      filter,
      banks,
      valuesByBank,
    },
    actions: {
      setFilter,
      handleClearFilter,
    },
  };
};
