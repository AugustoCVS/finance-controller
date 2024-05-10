import { ChangeEventHandler } from "react";

export type SelectProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>
  disabled?: boolean;
  errorMessage?: string;
  isInvalid?: boolean;
  children: React.ReactNode;
};
