import * as yup from 'yup';
import { EditAccountSchema } from './modal-edit-account.constants';
import { AccountProps } from '@/services/interfaces/account';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

export type ModalEditAccountProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  handleGetTransactions: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<AccountProps[], Error>>
  userId: string;
  accountData: AccountProps;
}

export type formProps = yup.InferType<typeof EditAccountSchema>;