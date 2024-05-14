export enum AccountType {
  CORRENTE = "CORRENTE",
  POUPANCA = "POUPANCA",
  SALARIO = "SALARIO",
  PAGAMENTOS = "PAGAMENTOS",
  OUTRAS = "OUTRAS",
}

export enum BankTypes {
  ITAU_UNIBANCO= 'ITAU_UNIBANCO',
  BRADESCO= 'BRADESCO',
  SANTANDER= 'SANTANDER',
  BTG_PACTUAL= 'BTG_PACTUAL',
  NUBANK= 'NUBANK',
  C6= 'C6',
  INTER= 'INTER',
  CAIXA= 'CAIXA',
  OUTROS= 'OUTROS'
};

export type AccountProps = {
  id: string;
  name: string;
  balance: number;
  bank: BankTypes;
  accountType: AccountType;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AccountRequestProps = {
  userId?: string;
};


export type CreateAccountRequestProps = {
  bank: BankTypes,
  accountType: AccountType;
  description: string;
}

export type UpdateAccountRequestProps = {
  bank?: BankTypes,
  accountType?: AccountType;
  description?: string;
  accountId: string;
}
