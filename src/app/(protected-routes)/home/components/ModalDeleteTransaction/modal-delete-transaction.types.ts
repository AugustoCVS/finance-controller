import { TransactionsProps } from "@/services/interfaces/transactions";

export type ModalDeleteTransactionProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  handleGetTransactions: () => Promise<void>;
  userId: string;
  transactionData: TransactionsProps
}