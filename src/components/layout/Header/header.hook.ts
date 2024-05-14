import { usePathname } from "next/navigation";

export const useHeader = () => {
  const pathName = usePathname();

  const pathNameOptions: Record<string, string> = {
    accounts: "Contas",
    dashboard: "Resumo",
  }

  const handleTransformPathName = (): string | null => {
    const transformedPathName = pathName.replace("/", "");
    if (transformedPathName === "home") return null;
    return pathNameOptions[transformedPathName]
  };

  return {
    states: {
      pathName,
    },
    actions: {
      handleTransformPathName,
    },
  };
};
