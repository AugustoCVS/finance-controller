import { useMutation } from "@tanstack/react-query";
import { ModalDeleteTransactionProps } from "./modal-delete-transaction.types";
import { TransactionsService } from "@/services/transactions";
import { MessageUtils } from "@/utils/messages";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./modal-delete-transacion.constants";

export const useModalDeleteTransaction = ({
handleGetTransactions,
isOpen,
onOpenChange,
transactionData,
}: ModalDeleteTransactionProps) => {

  const handleCloseModal = (): void => {
    onOpenChange();
  }

  const deleteTransaction = useMutation({
    mutationKey: ["deleteTransaction"],
    mutationFn: async () => {
      await TransactionsService.deleteTransaction({
        transactionId: transactionData.id
      })
    },
    onSuccess: async () => {
      await handleGetTransactions();
      handleCloseModal();
      MessageUtils.handleSendToast({
        message: SUCCESS_MESSAGE,
        type: "success"
      })
    },
    onError: () => {
      MessageUtils.handleSendToast({
        message: ERROR_MESSAGE,
        type: "error"
      })
    }
  })

  const handleDeleteTransaction = (): void => {
    deleteTransaction.mutate();
  }

  return {
    states: {
      deleteTransaction
    },
    actions: {
      handleCloseModal,
      handleDeleteTransaction,
    }
  }

}