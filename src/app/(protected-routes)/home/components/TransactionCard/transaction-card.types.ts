export type TransactionProps = {
  title: string;
  value: number;
  accountName: string;
  category: string;
  date: Date;
  edit: () => void;
  remove: () => void;
}