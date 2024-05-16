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
    limit = 1000,
    accountId = "",
    category = "",
  }: TransactionRequestProps) => {
    const res = await api.get<TransactionResponseProps>(
      `/transactions/list/${userId}/?page=${page}&limit=${limit}&accountId=${accountId}&category=${category}`
    );

    return res.data;
  },

  createTransaction: async (
    {
      accountId,
      category,
      date,
      description,
      type,
      value,
    }: CreateTransactionProps,
    { userId }: { userId: string }
  ) => {
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

  updateTransaction: async (
    {
      accountId,
      category,
      date,
      description,
      type,
      value,
    }: UpdateTransactionProps,
    { transactionId }: { transactionId: string }
  ) => {
    const res = await api.put<TransactionsProps>(
      `/transactions/update/${transactionId}`,
      {
        description,
        value,
        date,
        type,
        category,
        accountId,
      }
    );

    return res.data;
  },

  deleteTransaction: async ({ transactionId }: { transactionId: string }) => {
    const res = await api.delete(`/transactions/delete/${transactionId}`);
    return res.data;
  },
};
