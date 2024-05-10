import * as yup from 'yup';
import { NewTransactionSchema } from './modal-new-transaction.constants';

export type ModalNewTransactionProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  handleGetTransactions: () => Promise<void>;
  userId: string;
}

export type formProps = yup.InferType<typeof NewTransactionSchema>;

export interface FormField {
  id: number;
  name: string;
  title: string;
  type: string;
}