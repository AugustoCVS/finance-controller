import { TransactionCategory } from "@/services/interfaces/transactions";

export const CategoryList = [
  { id: 0, value: TransactionCategory.ALIMENTACAO, label: "Alimentação", color: "#FF5733" },
  { id: 1, value: TransactionCategory.EDUCACAO, label: "Educação", color: "#33FF57" },
  { id: 2, value: TransactionCategory.LAZER, label: "Lazer", color: "#3357FF" },
  { id: 3, value: TransactionCategory.SALARIO, label: "Salário", color: "#FF33A1" },
  { id: 4, value: TransactionCategory.SAUDE, label: "Saúde", color: "#A133FF" },
  { id: 5, value: TransactionCategory.TRANSPORTE, label: "Transporte", color: "#33FFA1" },
  { id: 6, value: TransactionCategory.VIAGENS, label: "Viagens", color: "#FFA133" },
  { id: 7, value: TransactionCategory.OUTROS, label: "Outros", color: "#33A1FF" },
] as const;
