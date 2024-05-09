export type MetaData = {
  page: number;
  limit: number;
  total: number;
};

export enum TransactionType {
  INCOME = "INCOME",
  OUTCOME = "OUTCOME",
}

export enum TransactionCategory {
  SALARIO = "Salário",
  ALIMENTACAO = "Alimentação",
  TRANSPORTE = "Transporte",
  LAZER = "Lazer",
  EDUCACAO = "Educação",
  VIAGENS = "Viagens",
  SAUDE = "Saúde",
  OUTROS = "Outros",
}

export type TransactionsProps = {
  id: string;
  description: string;
  value: number;
  date: Date;
  category: TransactionCategory;
  type: TransactionType;
  accountId: string;
  accountName: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TransactionRequestProps = {
  userId?: string;
  page?: number;
  limit?: number;
  accountId?: string;
  category?: TransactionCategory | "";
};

export type TransactionResponseProps = {
  transactions: TransactionsProps[];
  meta: MetaData;
};
