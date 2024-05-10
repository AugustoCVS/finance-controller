import { TransactionCategory } from "@/services/interfaces/transactions";
import * as yup from "yup";
import { FormField } from "./modal-new-transaction.types";

export const NewTransactionSchema = yup.object().shape({
  description: yup.string().required("Descrição do gasto é obrigatória"),
  value: yup.number().required("Valor é obrigatório"),
  date: yup.date().required("Data é obrigatória"),
  accountName: yup.string().required("Conta é obrigatória"),
  category: yup.string().required("Categoria é obrigatória"),
  type: yup.string().required("Tipo da transação é obrigatório"),
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
  {
    id: 3,
    name: "accountName",
    title: "Conta",
    type: "select",
  },
  {
    id: 4,
    name: "category",
    title: "Categoria",
    type: "select",
    options: [
      { id: 0, value: TransactionCategory.ALIMENTACAO, label: "Alimentação" },
      { id: 1, value: TransactionCategory.EDUCACAO, label: "Educação" },
      { id: 2, value: TransactionCategory.LAZER, label: "Lazer" },
      { id: 3, value: TransactionCategory.SALARIO, label: "Salário" },
      { id: 4, value: TransactionCategory.SAUDE, label: "Saúde" },
      { id: 5, value: TransactionCategory.TRANSPORTE, label: "Transporte" },
      { id: 6, value: TransactionCategory.VIAGENS, label: "Viagens" },
      { id: 7, value: TransactionCategory.OUTROS, label: "Outros" },
    ]
  },
];
