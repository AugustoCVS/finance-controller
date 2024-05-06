import { LoaderCircle } from "lucide-react";
import { LoadingProps } from "./loading.types";

export const Loading: React.FC<LoadingProps> = ({ size, className, color }) => {
  return (
    <LoaderCircle
      className={
        className
          ? className
          : "w-full flex items-center justify-center animate-spin"
      }
      size={size}
      color={color}
    />
  );
};
