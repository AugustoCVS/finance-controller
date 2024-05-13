import { TransactionCategory, TransactionType } from "@/services/interfaces/transactions";
import * as yup from "yup";
import { FormField } from "./modal-edit-transaction.types";

export const EditTransactionSchema = yup.object().shape({
  description: yup.string(),
  value: yup.number(),
  date: yup.string(),
  accountId: yup.string(),
  category: yup.string<TransactionCategory>(),
  type: yup.string<TransactionType>(),
});

export const FormFields: FormField[] = [
  {
    id: 0,
    name: "description",
    title: "Descrição",
    type: "text",
  },
  {
    id: 1,
    name: "value",
    title: "Preço",
    type: "number",
  },
  {
    id: 2,
    name: "date",
    title: "mm/dd/yyyy",
    type: "date",
  },
];

export const CategoryList = [
  { id: 0, value: TransactionCategory.ALIMENTACAO, label: "Alimentação" },
  { id: 1, value: TransactionCategory.EDUCACAO, label: "Educação" },
  { id: 2, value: TransactionCategory.LAZER, label: "Lazer" },
  { id: 3, value: TransactionCategory.SALARIO, label: "Salário" },
  { id: 4, value: TransactionCategory.SAUDE, label: "Saúde" },
  { id: 5, value: TransactionCategory.TRANSPORTE, label: "Transporte" },
  { id: 6, value: TransactionCategory.VIAGENS, label: "Viagens" },
  { id: 7, value: TransactionCategory.OUTROS, label: "Outros" },
];

export const ERROR_MESSAGE = "Erro ao editar transação";
export const SUCCESS_MESSAGE = "Transação editada com sucesso";
