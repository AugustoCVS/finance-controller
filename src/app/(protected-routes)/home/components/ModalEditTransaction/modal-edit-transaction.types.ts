import * as yup from 'yup';
import { EditTransactionSchema } from './modal-edit-transaction.constants';
import { TransactionsProps } from '@/services/interfaces/transactions';

export type ModalEditTransactionProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  handleGetTransactions: () => Promise<void>;
  userId: string;
  transactionData: TransactionsProps
}

export type formProps = yup.InferType<typeof EditTransactionSchema>;

export interface FormField {
  id: number;
  name: string;
  title: string;
  type: string;
}