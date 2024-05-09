import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useQuery } from "@tanstack/react-query";

import { MessageUtils } from "@/utils/messages";
import { ERROR_MESSAGE } from "./home.constants";
import { TransactionsService } from "@/services/transactions";
import { setTransactions } from "@/redux/slices/Transactions/transactions.slice";

export const useHome = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleGetTransactions = async (): Promise<void> => {
    await TransactionsService.getTransactions({
      userId: user.id,
    }).then((res) => {
      dispatch(setTransactions(res.transactions));
    }).catch(() => {
      MessageUtils.handleSendToast({
        message: ERROR_MESSAGE,
        type: "error",
      })
    });
  };

  const { isLoading } = useQuery({
    queryKey: ["getBalance"],
    queryFn: async () => {
      await handleGetTransactions()
      return null
    },
    refetchOnWindowFocus: false,
    retry: false,
    enabled: user.id !== "",
  });

  return {
    states: {
      isLoading,
      user,
    },
  };
};
