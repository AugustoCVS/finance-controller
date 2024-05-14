import { RootState } from "@/redux/store";
import { AccountService } from "@/services/account";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useAccounts = () => {
  const user = useSelector((state: RootState) => state.user);

  const { data, isLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      return await AccountService.getAccounts({
        userId: user.id,
      });
    },
  });

  return {
    states: {
      data,
      isLoading,
    }
  }
};
