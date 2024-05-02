import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  onClick,
  className,
  type,
}) => {
  return (
    <button
      className={
        className
          ? className
          : "w-full p-4 border border-gray-500 bg-gray-700 text-gray-100 font-regular hover:bg-gray-100 hover:text-gray-700 rounded-lg"
      }
      onClick={onClick}
      disabled={loading}
      type={type}
    >
      {children}
    </button>
  );
};
