import { TransactionCategory } from "@/services/interfaces/transactions";

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