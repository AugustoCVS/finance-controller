import * as yup from 'yup';
import { NewTransactionSchema } from './modal-new-transaction.constants';

export type ModalNewTransactionProps = {
  isOpen: boolean;
  onOpenChange: () => void;
}

export type formProps = yup.InferType<typeof NewTransactionSchema>;

export interface FormField {
  id: number;
  name: string;
  title: string;
  type: string;
  options?: { id: number; value: string; label: string }[];
  loading?: boolean;
}