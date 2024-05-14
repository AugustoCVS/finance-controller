import { RootState } from "@/redux/store";
import { AccountService } from "@/services/account";
import { AccountProps } from "@/services/interfaces/account";
import { useDisclosure } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useAccounts = () => {
  const user = useSelector((state: RootState) => state.user);

  const { isOpen, onOpenChange } = useDisclosure();
  const { isOpen: isEditModalOpen, onOpenChange: onEditModalOpenChange } =
    useDisclosure();
  const { isOpen: isDeleteModalOpen, onOpenChange: onDeleteModalOpenChange } =
    useDisclosure();

  const [accountData, setAccountData] = useState<AccountProps>();

  console.log(accountData)

  const handleGetAccounts = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      return await AccountService.getAccounts({
        userId: user.id,
      });
    },
  });

  const handleOpenNewAccountModal = (): void => {
    onOpenChange();
  };

  const handleOpenEditModal = ({
    accountData,
  }: {
    accountData: AccountProps;
  }): void => {
    setAccountData(accountData);
    onEditModalOpenChange();
  };

  const handleOpenDeleteModal = (): void => {
    onDeleteModalOpenChange();
  };

  return {
    states: {
      handleGetAccounts,
      user,
      isOpen,
      onOpenChange,
      isEditModalOpen,
      onEditModalOpenChange,
      isDeleteModalOpen,
      onDeleteModalOpenChange,
      accountData,
    },
    actions: {
      handleOpenNewAccountModal,
      handleOpenEditModal,
      handleOpenDeleteModal,
    },
  };
};
