import { useQuery } from "@tanstack/react-query";
import { AuthService } from "@/services/auth";

export const useHome = () => {
  const { data } = useQuery({
    queryKey: ["refreshToken"],
    queryFn: () => AuthService.profile(),
    refetchOnWindowFocus: false,
    retry: false,
  }); 

  console.log(data)

  return {
    states: {
      data,
    },
  };
};
