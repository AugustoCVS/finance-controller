import { useMutation, useQuery } from "@tanstack/react-query";
import { ModalNewTransactionProps } from "./modal-new-transaction.types";
import {
  CreateTransactionProps,
  TransactionType,
} from "@/services/interfaces/transactions";
import { TransactionsService } from "@/services/transactions";
import { MessageUtils } from "@/utils/messages";
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from "./modal-new-transaction.constants";
import { useState } from "react";
import { AccountService } from "@/services/account";

export const useModalNewTransaction = ({
  handleGetTransactions,
  onOpenChange,
  userId,
}: ModalNewTransactionProps) => {
  const [selectedType, setSelectedType] = useState<TransactionType>();

  const handleCreateTransaction = useMutation({
    mutationFn: async (data: CreateTransactionProps) =>
      await TransactionsService.createTransaction(data, { userId }),
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

  const onFormSubmit = (data: CreateTransactionProps) => {
    if (data.type === TransactionType.INCOME) {
      data.value = Math.abs(data.value); 
    } else if (data.type === TransactionType.OUTCOME) {
      data.value = -Math.abs(data.value); 
    }

    handleCreateTransaction.mutate(data);
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

  return {
    states: {
      handleCreateTransaction,
      selectedType,
      data,
    },
    actions: {
      onFormSubmit,
      setSelectedType,
    },
  };
};
