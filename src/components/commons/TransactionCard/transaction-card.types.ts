export type TransactionProps = {
  title: string;
  value: number;
  accountName: string;
  category: string;
  date: Date;
  shouldHideButtons?: boolean;
  edit?: () => void;
  remove?: () => void;
}