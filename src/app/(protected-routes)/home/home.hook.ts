import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useMutation, useQuery } from "@tanstack/react-query";

import { MessageUtils } from "@/utils/messages";
import { ERROR_DELETE_MESSAGE, ERROR_MESSAGE, SUCCESS_DELETE_MESSAGE } from "./home.constants";
import { TransactionsService } from "@/services/transactions";
import { setTransactions } from "@/redux/slices/Transactions/transactions.slice";
import { useDisclosure } from "@nextui-org/react";
import { TransactionsProps } from "@/services/interfaces/transactions";
import { useState } from "react";

export const useHome = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const transactions = useSelector((state: RootState) => state.transactions);

  const { isOpen, onOpenChange } = useDisclosure();
  const { isOpen: isEditModalOpen, onOpenChange: onEditModalOpenChange } = useDisclosure();
  const { isOpen: isDeleteModalOpen, onOpenChange: onDeleteModalOpenChange } = useDisclosure();

  const [transaction, setTransaction] = useState<TransactionsProps>();

  const handleGetTransactions = async (): Promise<void> => {
    await TransactionsService.getTransactions({
      userId: user.id,
    })
      .then((res) => {
        dispatch(setTransactions(res.transactions));
      })
      .catch(() => {
        MessageUtils.handleSendToast({
          message: ERROR_MESSAGE,
          type: "error",
        });
      });
  };

  const { isPending } = useQuery({
    queryKey: ["getBalance"],
    queryFn: async () => {
      await handleGetTransactions();
      return null;
    },
    refetchOnWindowFocus: false,
    retry: false,
    enabled: user.id !== "",
  });

  const handleOpenEditModal = ({
    transactionData
  }: {transactionData: TransactionsProps}) => {
    setTransaction(transactionData);
    onEditModalOpenChange();
  };

  const handleOpenNewModal = () => {
    onOpenChange();
  }

  const handleOpenDeleteModal = ({
    transactionData
  }: {transactionData: TransactionsProps}) => {
    setTransaction(transactionData);
    onDeleteModalOpenChange();
  };

  const deleteTransaction = useMutation({
    mutationFn: async ({ transactionId }: { transactionId: string }) => {
      return await TransactionsService.deleteTransaction({
        transactionId,
      });
    },
    onSuccess: async () => {
      await handleGetTransactions();
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

  const handleDeleteTransaction = (): void => {
    if(transaction){
      deleteTransaction.mutate({ transactionId: transaction?.id });
    }
    onDeleteModalOpenChange();
  }

  return {
    states: {
      isPending,
      transactions,
      user,
      transaction,
      isOpen,
      isEditModalOpen,
      isDeleteModalOpen,
      deleteTransaction,
    },
    actions: {
      handleGetTransactions,
      setTransaction,
      handleOpenEditModal,
      handleOpenNewModal,
      handleOpenDeleteModal,
      onOpenChange,
      onEditModalOpenChange,
      onDeleteModalOpenChange,
      handleDeleteTransaction,
    },
  };
};
