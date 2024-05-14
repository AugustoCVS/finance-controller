export const accountOptions = [
  { value: "CORRENTE", label: "Conta corrente" },
  { value: "POUPANCA", label: "Conta poupança" },
  { value: "SALARIO", label: "Conta salário" },
  { value: "PAGAMENTOS", label: "Conta de pagamentos" },
  { value: "OUTRAS", label: "Outras" },
];

export const bankOptions = [
  { value: "ITAU_UNIBANCO", label: "Itaú Unibanco" },
  { value: "BRADESCO", label: "Bradesco" },
  { value: "SANTANDER", label: "Santander" },
  { value: "BTG_PACTUAL", label: "BTG Pactual" },
  { value: "NUBANK", label: "Nubank" },
  { value: "C6", label: "C6" },
  { value: "INTER", label: "Inter" },
  { value: "CAIXA", label: "Caixa" },
  { value: "OUTROS", label: "Outros" },
];

export const selectFields = [
  {
    id: 0,
    name: 'accountType',
    label: 'Tipo da conta',
    options: accountOptions
  },
  {
    id: 1,
    name: 'bank',
    label: 'Banco',
    options: bankOptions
  }
]


export const SUCCESS_DELETE_MESSAGE = "Conta deletada com sucesso";
export const ERROR_DELETE_MESSAGE = "Erro ao deletar conta";