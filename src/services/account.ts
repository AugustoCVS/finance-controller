import { api } from "./api";
import {
  AccountProps,
  AccountRequestProps,
  CreateAccountRequestProps,
  UpdateAccountRequestProps,
} from "./interfaces/account";

export const AccountService = {
  getAccount: async ({ userId }: AccountRequestProps) => {
    const res = await api.get<AccountProps[]>(`/accounts/${userId}`);
    return res.data;
  },

  createAccount: async ({
    accountType,
    bank,
    description,
    userId,
  }: CreateAccountRequestProps) => {
    const res = await api.post<AccountProps>("/accounts/create", {
      userId,
      accountType,
      bank,
      description,
    });
    return res.data;
  },

  updateAccount: async ({
    accountType,
    bank,
    description,
    accountId,
  }: UpdateAccountRequestProps) => {
    const res = await api.put<AccountProps>(`/accounts/update/${accountId}`, {
      accountType,
      bank,
      description,
    });
    return res.data;
  },

  deleteAccount: async ({ accountId }: { accountId: string }) => {
    const res = await api.delete(`/accounts/delete/${accountId}`);
    return res.data;
  },
};
