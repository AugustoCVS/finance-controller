import { api } from "./api";
import {
  CreateTransactionProps,
  TransactionRequestProps,
  TransactionResponseProps,
  TransactionsProps,
  UpdateTransactionProps,
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

  crateTransaction: async ({
    accountId,
    category,
    date,
    description,
    type,
    userId,
    value,
  }: CreateTransactionProps) => {
    const res = await api.post<TransactionsProps>("/transactions/create", {
      accountId,
      category,
      date,
      description,
      type,
      userId,
      value,
    });

    return res.data;
  },

  updateTransaction: async ({transactionId, accountId, category, date, description, type, value}: UpdateTransactionProps) => {
    const res = await api.put<TransactionsProps>(`/transactions/update/${transactionId}`, {
      description,
      value,
      date,
      type,
      category,
      accountId,
    });

    return res.data;
  },

  deleteTransaction: async ({ transactionId }: { transactionId: string }) => {
    const res = await api.delete(`/transactions/delete/${transactionId}`);
    return res.data;
  },
};
