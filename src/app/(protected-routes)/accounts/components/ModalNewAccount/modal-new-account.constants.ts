import * as yup from "yup";
import { AccountType, BankTypes } from "@/services/interfaces/account";

export const NewAccountSchema = yup.object().shape({
  description: yup.string().max(50).required("Descrição da conta é obrigatória"),
  bank: yup.string<BankTypes>().required("Selecionar um banco é obrigatório"),
  accountType: yup.string<AccountType>().required("Tipo de conta é obrigatório"),
});

export const ERROR_MESSAGE = "Erro ao criar conta";
export const SUCCESS_MESSAGE = "Conta criada com sucesso";