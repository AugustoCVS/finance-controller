import { TransactionCategory, TransactionType } from "@/services/interfaces/transactions";
import * as yup from "yup";
import { FormField } from "./modal-new-transaction.types";

export const NewTransactionSchema = yup.object().shape({
  description: yup.string().required("Descrição do gasto é obrigatória"),
  value: yup.number().required("Valor é obrigatório"),
  date: yup.date().required("Data é obrigatória"),
  accountId: yup.string().required("Conta é obrigatória"),
  category: yup.string<TransactionCategory>().required("Categoria é obrigatória"),
  type: yup.string<TransactionType>().required("Tipo da transação é obrigatório"),
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

export const ERROR_MESSAGE = "Erro ao criar transação";
export const SUCCESS_MESSAGE = "Transação criada com sucesso";
