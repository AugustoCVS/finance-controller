import { InputProps } from "./input.types";

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  type,
  value,
  isSecondButton,
  disabled,
  errorMessage,
  isInvalid,
}) => {
  const invalid = !!errorMessage || isInvalid;

  const buttonStyle = isSecondButton
    ? "text-gray-500 bg-gray-900"
    : "text-gray-800 bg-white";
  const hasError = errorMessage ? "border-red-500" : "border-gray-300";

  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`flex items-center p-6 w-full text-sm border  rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500
          ${buttonStyle}
          ${hasError}
        `}
      />
      {invalid && (
        <span className="text-red-500 text-sm font-semibold">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
