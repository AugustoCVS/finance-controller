import { Button } from "@/components/commons/Button/button.component";
import { ButtonSectionProps } from "./button-section.types";

export const ButtonSection: React.FC<ButtonSectionProps> = ({
  deleteAccount,
  editAccount,
}) => {
  return (
    <div className="w-full flex items-center xsm:gap-2 sm:gap-12">
      <Button
        onClick={editAccount}
        className="w-full items-center justify-center p-3 border bg-green-300 text-gray-100 font-regular hover:bg-green-500 rounded-lg border-none"
      >
        Editar
      </Button>
      <Button
        onClick={deleteAccount}
        className="w-full items-center justify-center p-3 border bg-red-300 text-gray-100 font-regular hover:bg-red-500 rounded-lg border-none"
      >
        Excluir
      </Button>
    </div>
  );
};
