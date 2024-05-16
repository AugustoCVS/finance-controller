import { AccountProps } from "@/services/interfaces/account";
import { FilterProps } from "../../dashboard.types";

export type TransactionFilterProps = {
  accounts: AccountProps[] | undefined;
  filter: FilterProps;
  setFilter: ({ accountId, category }: FilterProps) => void;
};
