import { TransactionType } from "@/services/interfaces/transactions";
import { Dispatch, SetStateAction } from "react";

export type TransactionTypeButtonsProps = {
  selectedType: TransactionType | undefined
  setType: Dispatch<SetStateAction<TransactionType | undefined>>
  errorMessage: string | undefined;
  isInvalid: boolean;
}