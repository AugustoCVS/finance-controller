import { TransactionTypeButtonsProps } from "./transaction-type-buttons.types";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { TransactionType } from "@/services/interfaces/transactions";

export const TransactionTypeButtons: React.FC<TransactionTypeButtonsProps> = ({
  selectedType,
  setType,
  errorMessage,
  isInvalid,
}) => {
  const IncomeButtonColor =
    selectedType === TransactionType.INCOME ? "bg-green-500" : "bg-gray-600";
  const OutcomeButtonCOlor =
    selectedType === TransactionType.OUTCOME ? "bg-red-500" : "bg-gray-600";

  const invalid = !!errorMessage || isInvalid;

  return (
    <>
      <div className="w-full flex gap-4 items-center">
        <div
          className={`w-full items-center justify-center p-4 ${IncomeButtonColor} text-gray-100 font-regular rounded-lg cursor-pointer`}
          onClick={() => setType(TransactionType.INCOME)}
        >
          <div className="flex items-center justify-center gap-4">
            <CircleArrowUp
              size={18}
              color={
                selectedType === TransactionType.INCOME ? "#FFFFFF" : "#00B37E"
              }
            />
            Entrada
          </div>
        </div>
        <div
          className={`w-full items-center justify-center p-4 ${OutcomeButtonCOlor} text-gray-100 font-regular rounded-lg cursor-pointer`}
          onClick={() => setType(TransactionType.OUTCOME)}
        >
          <div className="flex items-center justify-center gap-4">
            <CircleArrowDown
              size={18}
              color={
                selectedType === TransactionType.OUTCOME ? "#FFFFFF" : "#F75A68"
              }
            />
            Saída
          </div>
        </div>
      </div>

      {invalid && (
        <span className="text-red-500 text-sm font-semibold">
          {errorMessage}
        </span>
      )}
    </>
  );
};
