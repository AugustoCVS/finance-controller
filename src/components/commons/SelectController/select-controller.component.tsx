import { Controller } from "react-hook-form";
import { SelectControllerProps } from "./select-controller.types";
import { Select } from "../Select/select.component";

export const SelectController: React.FC<SelectControllerProps> = ({
  control,
  errorMessage,
  isInvalid,
  name,
  children,
  defaultValue,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Select
          value={field.value}
          onChange={field.onChange}
          errorMessage={errorMessage}
          isInvalid={isInvalid}
          label={label}
        >
          {children}
        </Select>
      )}
    />
  );
};
