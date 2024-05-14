import * as yup from "yup";
import { AccountType, BankTypes } from "@/services/interfaces/account";

export const NewAccountSchema = yup.object().shape({
  description: yup.string().max(50).required("Descrição da conta é obrigatória"),
  bankType: yup.string<AccountType>().required("Categoria é obrigatória"),
  accountType: yup.string<BankTypes>().required("Tipo da transação é obrigatório"),
});

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
    name: 'bankType',
    label: 'Banco',
    options: bankOptions
  }
]