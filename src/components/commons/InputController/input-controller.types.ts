export type InputControllerProps = {
  control: any;
  name: string;
  placeholder: string;
  type: string;
  errorMessage: string | undefined;
  isInvalid: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};