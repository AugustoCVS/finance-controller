import { api } from "./api";
import {
  TransactionRequestProps,
  TransactionResponseProps,
} from "./interfaces/transactions";

export const TransactionsService = {
  getTransactions: async ({
    userId,
    page = 1,
    limit = 20,
    accountId = "",
    category = "",
  }: TransactionRequestProps) => {
    const res = await api.get<TransactionResponseProps>(
      `/transactions/list/${userId}/?page=${page}&limit=${limit}&accountId=${accountId}&category=${category}`
    );

    return res.data;
  },
};
