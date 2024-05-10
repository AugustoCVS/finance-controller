import { SelectProps } from "./select.types";

export const Select: React.FC<SelectProps> = ({
  onChange,
  value,
  disabled,
  errorMessage,
  isInvalid,
  children,
}) => {
  const invalid = !!errorMessage || isInvalid;

  const hasError = errorMessage ? "border-red-500" : "border-gray-300";

  return (
    <div className="flex flex-col gap-1">
      <select
        onChange={onChange}
        value={value}
        disabled={disabled}
        className={`flex items-center w-full text-sm text-gray-100 p-4 rounded-lg bg-gray-900 appearance-none
          ${hasError}
        `}
      >
        {children}
      </select>
      {invalid && (
        <span className="text-red-500 text-sm font-semibold">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
