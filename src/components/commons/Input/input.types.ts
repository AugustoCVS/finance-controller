export type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  isSecondInput?: boolean;
  errorMessage?: string;
  isInvalid?: boolean;
};
