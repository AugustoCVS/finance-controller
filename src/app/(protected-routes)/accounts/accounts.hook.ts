import { RootState } from "@/redux/store";
import { AccountService } from "@/services/account";
import { useDisclosure } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useAccounts = () => {
  const user = useSelector((state: RootState) => state.user);

  const { isOpen, onOpenChange } = useDisclosure();
  const { isOpen: isEditModalOpen, onOpenChange: onEditModalOpenChange } = useDisclosure();
  const { isOpen: isDeleteModalOpen, onOpenChange: onDeleteModalOpenChange } = useDisclosure();

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
  }

  const handleOpenEditModal = (): void => {
    onEditModalOpenChange();
  }

  const handleOpenDeleteModal = (): void => {
    onDeleteModalOpenChange();
  }

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
    },
    actions: {
      handleOpenNewAccountModal,
      handleOpenEditModal,
      handleOpenDeleteModal,
    }
  }
};
