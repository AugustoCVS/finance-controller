import { AccountProps } from "@/services/interfaces/account";

export type AccountsListProps = {
  list: AccountProps[];
  handleOpenEditModal: ({ accountData }: { accountData: AccountProps }) => void;
  handleOpenDeleteModal: ({
    accountData,
  }: {
    accountData: AccountProps;
  }) => void;
};
