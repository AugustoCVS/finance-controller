export type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  isSecondButton?: boolean;
  errorMessage?: string;
  isInvalid?: boolean;
};
