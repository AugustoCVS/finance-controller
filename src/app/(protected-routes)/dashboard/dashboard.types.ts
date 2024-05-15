import { TransactionCategory } from "@/services/interfaces/transactions";

export type FilterProps = {
  accountId: string;
  category: TransactionCategory;
}