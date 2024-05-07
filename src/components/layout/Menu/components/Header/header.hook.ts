import { useRouter } from "next/navigation"

export const useHeader = () => {
  const router = useRouter();

  const handleNavigateToHome = () => {
    router.push("/home");
  }

  return {
    actions: {
      handleNavigateToHome,
    }
  }
}