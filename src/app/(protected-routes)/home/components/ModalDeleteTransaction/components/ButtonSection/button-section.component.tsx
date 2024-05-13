import { Button } from "@/components/commons/Button/button.component";
import { ButtonSectionProps } from "./button-section.types";
import { Loading } from "@/components/commons/Loading/loading.component";

export const ButtonSection: React.FC<ButtonSectionProps> = ({
  handleDeleteTransaction,
  isLoading,
  onClose,
}) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Button
        className="flex items-center justify-center p-4 bg-red-300 text-white rounded-2xl cursor-pointer hover:bg-red-500"
        onClick={handleDeleteTransaction}
      >
        {isLoading ? <Loading /> : "Deletar"}
      </Button>
      <Button
        className="flex items-center justify-center p-4 bg-gray-300 text-white rounded-2xl cursor-pointer hover:bg-gray-400"
        onClick={onClose}
      >
        Cancelar
      </Button>
    </div>
  );
};
