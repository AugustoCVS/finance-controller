export type InputControllerProps = {
  control: any;
  name: string;
  placeholder: string;
  type: string;
  errorMessage: string | undefined;
  isInvalid: boolean;
  isSecondInput?: boolean;
  children?: React.ReactNode;
  defaultValue?: string | number | Date;
  onClick?: () => void;
};