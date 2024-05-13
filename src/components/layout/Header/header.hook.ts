import { usePathname } from "next/navigation";

export const useHeader = () => {
  const pathName = usePathname();

  const handleTransformPathName = (): string | null => {
    const transformedPathName = pathName.replace("/", "");
    if (transformedPathName === "home") return null;
    return transformedPathName;
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
