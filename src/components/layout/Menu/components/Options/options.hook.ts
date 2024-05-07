import { usePathname, useRouter } from "next/navigation";

export const useOptions = () => {
  const router = useRouter();
  const pathName = usePathname();

  const handleNavigate = ({ screenName }: { screenName: string }) => {
    router.push(`/${screenName}`);
  };

  const handleChangeBackgroundColor = (option: string) => {
    const transformPath = pathName.split("/")[1];
    return transformPath === option ? "bg-gray-800" : "";
  };

  return {
    actions: {
      handleNavigate,
      handleChangeBackgroundColor,
    },
  };
};
