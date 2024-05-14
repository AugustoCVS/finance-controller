import { AccountType, BankTypes } from "@/services/interfaces/account";

export type ContentProps = {
  bank: BankTypes;
  balance: number;
  accountType: AccountType;
  description: string;
}