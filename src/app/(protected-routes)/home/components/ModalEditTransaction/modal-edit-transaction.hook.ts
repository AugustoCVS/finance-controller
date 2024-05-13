import { useMutation, useQuery } from "@tanstack/react-query";
import { FormField, ModalEditTransactionProps } from "./modal-edit-transaction.types";
import {
  TransactionType,
  UpdateTransactionProps,
} from "@/services/interfaces/transactions";
import { TransactionsService } from "@/services/transactions";
import { MessageUtils } from "@/utils/messages";
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from "./modal-edit-transaction.constants";
import { useEffect, useState } from "react";
import { AccountService } from "@/services/account";

export const useModalEditTransaction = ({
  handleGetTransactions,
  onOpenChange,
  userId,
  transactionData,
}: ModalEditTransactionProps) => {
  const [selectedType, setSelectedType] = useState<TransactionType>(transactionData.type);

  const handleUpdateTransaction = useMutation({
    mutationFn: async (data: UpdateTransactionProps) =>
      await TransactionsService.updateTransaction(data, { transactionId: transactionData.id }),
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

  const onFormSubmit = (data: UpdateTransactionProps): void => {
    if (data.type === TransactionType.INCOME) {
      data.value = Math.abs(data.value ?? 0); 
    } else if (data.type === TransactionType.OUTCOME) {
      data.value = -Math.abs(data.value ?? 0); 
    }
  
    handleUpdateTransaction.mutate(data);
  };

  const { data } = useQuery({
    queryKey: ["getAccounts"],
    queryFn: async () => {
      return await AccountService.getAccounts({
        userId: userId,
      });
    },
    enabled: userId !== "",
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    setSelectedType(transactionData.type); 
  }, [transactionData.type]);

  return {
    states: {
      handleUpdateTransaction,
      selectedType,
      data,
    },
    actions: {
      onFormSubmit,
      setSelectedType,
    },
  };
};
