import { InputProps } from "./input.types";

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  type,
  value,
  isSecondInput,
  disabled,
  errorMessage,
  isInvalid,
}) => {
  const invalid = !!errorMessage || isInvalid;

  const inputStyle = isSecondInput
    ? "text-gray-500 bg-gray-900 p-4"
    : "text-gray-800 bg-white p-6 border";
  const hasError = errorMessage ? "border-red-500" : "border-gray-300";

  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`flex items-center w-full text-sm text-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500
          ${inputStyle}
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
