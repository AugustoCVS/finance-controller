export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit" 
}