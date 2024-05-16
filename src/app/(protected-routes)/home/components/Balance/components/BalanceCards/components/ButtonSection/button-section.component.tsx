import { Button } from "@/components/commons/Button/button.component";

export const ButtonSection: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <div className="absolute top-4 right-4">
      <Button
        onClick={onClick}
        className="w-full items-center justify-center p-3 border bg-green-500 text-gray-100 font-regular hover:bg-green-300 rounded-lg border-none"
      >
        Nova Transação
      </Button>
    </div>
  );
};
