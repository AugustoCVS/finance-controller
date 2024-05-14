import { useMutation } from "@tanstack/react-query";
import { ModalNewAccountProps } from "./modal-new-account.types";
import { CreateAccountRequestProps } from "@/services/interfaces/account";
import { AccountService } from "@/services/account";
import { MessageUtils } from "@/utils/messages";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./modal-new-account.constants";

export const useModalNewAccount = ({
  handleGetTransactions,
  isOpen,
  onOpenChange,
  userId,
}: ModalNewAccountProps) => {
  const handleCloseModal = (): void => {
    onOpenChange();
  };

  const handleCreateAccount = useMutation({
    mutationFn: async (data: CreateAccountRequestProps) => {
      await AccountService.createAccount(data, { userId });
    },
    onError: () => {
      MessageUtils.handleSendToast({
        message: ERROR_MESSAGE,
        type: "error",
      });
    },
    onSuccess: () => {
      handleGetTransactions();
      onOpenChange();
      MessageUtils.handleSendToast({
        message: SUCCESS_MESSAGE,
        type: "success",
      });
    },
  });

  const onFormSubmit = (data: CreateAccountRequestProps) => {
    handleCreateAccount.mutate(data);
  };

  return {
    states: {
      handleCreateAccount,
    },
    actions: {
      handleCloseModal,
      onFormSubmit,
    },
  };
};
