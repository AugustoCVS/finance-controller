import * as yup from 'yup';
import { NewAccountSchema } from './modal-new-account.constants';
import { AccountProps } from '@/services/interfaces/account';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

export type ModalNewAccountProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  handleGetTransactions: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<AccountProps[], Error>>
  userId: string;
}

export type formProps = yup.InferType<typeof NewAccountSchema>;