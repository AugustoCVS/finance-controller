import * as yup from "yup";
import { AccountType, BankTypes } from "@/services/interfaces/account";

export const EditAccountSchema = yup.object().shape({
  description: yup.string().max(50, 'Máximo de 50 caracteres'),
  bank: yup.string<BankTypes>(),
  accountType: yup.string<AccountType>(),
});

export const ERROR_MESSAGE = "Erro ao atualizar conta";
export const SUCCESS_MESSAGE = "Conta atualizada com sucesso";