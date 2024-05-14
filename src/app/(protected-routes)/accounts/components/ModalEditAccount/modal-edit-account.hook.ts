import { useMutation } from "@tanstack/react-query";
import { ModalEditAccountProps } from "./modal-edit-account.types";
import { UpdateAccountRequestProps } from "@/services/interfaces/account";
import { AccountService } from "@/services/account";
import { MessageUtils } from "@/utils/messages";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./modal-edit-account.constants";

export const useModalEditAccount = ({
  handleGetTransactions,
  onOpenChange,
  userId,
  accountData,
}: ModalEditAccountProps) => {
  const handleCloseModal = (): void => {
    onOpenChange();
  };

  const handleEditAccount = useMutation({
    mutationFn: async (data: UpdateAccountRequestProps) => {
      await AccountService.updateAccount(data, {accountId: accountData.id} );
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

  const onFormSubmit = (data: UpdateAccountRequestProps) => {
    handleEditAccount.mutate(data);
  };

  return {
    states: {
      handleEditAccount,
    },
    actions: {
      handleCloseModal,
      onFormSubmit,
    },
  };
};
