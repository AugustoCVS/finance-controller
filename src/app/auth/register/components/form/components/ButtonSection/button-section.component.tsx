import { Button } from "@/components/commons/Button/button.component";
import { ButtonSectionProps } from "./button-section.types";
import { Loading } from "@/components/commons/Loading/loading.component";

export const ButtonSection: React.FC<ButtonSectionProps> = ({ isLoading }) => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-4">
      <div className="w-3/4 mt-2">
        <Button type="submit" loading={isLoading}>
          {isLoading ? <Loading /> : "Registrar"}
        </Button>
      </div>
    </div>
  );
};
