import { Button } from "@/components/commons/Button/button.component";
import { ButtonSectionProps } from "./button-section.types";
import { Loading } from "@/components/commons/Loading/loading.component";

export const ButtonSection: React.FC<ButtonSectionProps> = ({
  closeModal,
  createAccount,
  loading,
}) => {
  return (
    <div className="flex gap-4 py-4">
      <Button
        onClick={createAccount}
        loading={loading}
        className="w-full items-center justify-center p-3 border bg-green-300 text-gray-100 font-regular hover:bg-green-500 rounded-lg border-none"
        type="submit"
      >
        {loading ? <Loading /> : "Confirmar"}
      </Button>
      <Button
        onClick={closeModal}
        className="w-full items-center justify-center p-3 border bg-red-300 text-gray-100 font-regular hover:bg-red-500 rounded-lg border-none"
      >
        Cancelar
      </Button>
    </div>
  );
};
