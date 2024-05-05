export type InputControllerProps = {
  control: any;
  name: string;
  placeholder: string;
  type: string;
  errorMessage: string;
  isInvalid: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};