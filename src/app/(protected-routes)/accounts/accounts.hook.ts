import { RootState } from "@/redux/store";
import { AccountService } from "@/services/account";
import { AccountProps } from "@/services/interfaces/account";
import { MessageUtils } from "@/utils/messages";
import { useDisclosure } from "@nextui-org/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  ERROR_DELETE_MESSAGE,
  SUCCESS_DELETE_MESSAGE,
} from "./accounts.constants";

export const useAccounts = () => {
  const user = useSelector((state: RootState) => state.user);

  const { isOpen, onOpenChange } = useDisclosure();
  const { isOpen: isEditModalOpen, onOpenChange: onEditModalOpenChange } =
    useDisclosure();
  const { isOpen: isDeleteModalOpen, onOpenChange: onDeleteModalOpenChange } =
    useDisclosure();

  const [accountData, setAccountData] = useState<AccountProps>();

  const handleGetAccounts = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      return await AccountService.getAccounts({
        userId: user.id,
      });
    },
  });

  const deleteAccount = useMutation({
    mutationFn: async ({ accountId }: { accountId: string }) => {
      return await AccountService.deleteAccount({
        accountId,
      });
    },
    onSuccess: async () => {
      await handleGetAccounts.refetch();
      MessageUtils.handleSendToast({
        message: SUCCESS_DELETE_MESSAGE,
        type: "success",
      });
    },
    onError: () => {
      MessageUtils.handleSendToast({
        message: ERROR_DELETE_MESSAGE,
        type: "error",
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

  const handleOpenDeleteModal = ({
    accountData,
  }: {
    accountData: AccountProps;
  }): void => {
    setAccountData(accountData);
    onDeleteModalOpenChange();
  };

  const handleDeleteAccount = () => {
    if (accountData) {
      deleteAccount.mutate({
        accountId: accountData.id,
      });
      onDeleteModalOpenChange();
    }
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
      deleteAccount,
    },
    actions: {
      handleOpenNewAccountModal,
      handleOpenEditModal,
      handleOpenDeleteModal,
      handleDeleteAccount,
    },
  };
};
