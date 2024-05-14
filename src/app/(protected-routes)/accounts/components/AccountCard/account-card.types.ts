import { AccountType, BankTypes } from "@/services/interfaces/account";

export type AccountCardProps = {
  name: string;
  bank: BankTypes;
  balance: number;
  accountType: AccountType;
  description: string;
}