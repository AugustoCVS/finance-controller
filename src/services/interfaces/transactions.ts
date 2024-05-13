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
  SALARIO = "SALARIO",
  ALIMENTACAO = "ALIMENTACAO",
  TRANSPORTE = "TRANSPORTE",
  LAZER = "LAZER",
  EDUCACAO = "EDUCACAO",
  VIAGENS = "VIAGENS",
  SAUDE = "SAUDE",
  OUTROS = "OUTROS",
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

export type CreateTransactionProps = {
  description: string;
  value: number;
  date: Date;
  category: TransactionCategory;
  type: TransactionType;
  accountId: string;
};

export type UpdateTransactionProps = {
  description?: string;
  value?: number;
  date?: Date | string;
  category?: TransactionCategory;
  type?: TransactionType;
  accountId?: string;
}
