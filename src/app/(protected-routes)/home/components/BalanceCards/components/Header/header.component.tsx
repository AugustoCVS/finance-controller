import { CircleArrowDown, CircleArrowUp, DollarSign } from "lucide-react";
import { HeaderProps } from "./header.types";

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const renderIcons: Record<string, JSX.Element> = {
    Entradas: <CircleArrowUp color="#00875F" className="w-6 h-6" />,
    Saidas: <CircleArrowDown color="#F75A68" className="w-6 h-6" />,
    Total: <DollarSign color="white" className="w-6 h-6" />,
  };

  return (
    <div className="w-full flex items-center justify-between">
      <h2 className="text-white">{title}</h2>
      {renderIcons[title]}
    </div>
  );
};
