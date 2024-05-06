import { Controller } from "react-hook-form";
import { Input } from "../Input/input.component";
import { InputControllerProps } from "./input-controller.types";

export const InputController: React.FC<InputControllerProps> = ({
  control,
  errorMessage,
  isInvalid,
  name,
  placeholder,
  type,
  children,
  onClick,
}) => {
  return (
    <div className="relative">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            placeholder={placeholder}
            type={type}
            value={field.value}
            onChange={field.onChange}
            errorMessage={errorMessage}
            isInvalid={isInvalid}
          />
        )}
      />

      <div
        className="absolute right-0 top-6 px-4 border-none bg-transparent cursor-pointer"
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};
