import { Pencil, Trash2 } from "lucide-react";
import { ButtonSectionProps } from "./button-section.types";

export const ButtonSection: React.FC<ButtonSectionProps> = ({
  edit,
  remove,
}) => {
  return (
    <div className="w-full flex flex-1 gap-2">
      <Pencil
        className="cursor-pointer"
        size={18}
        color="#40B9F7"
        onClick={edit}
      />
      <Trash2
        className="cursor-pointer"
        size={18}
        color="#F75A68"
        onClick={remove}
      />
    </div>
  );
};
