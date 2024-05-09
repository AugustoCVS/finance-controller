export type TransactionProps = {
  title: string;
  value: number;
  accountName: string;
  category: string;
  date: Date;
  isLoading: boolean;
  edit: () => void;
  remove: () => void;
}