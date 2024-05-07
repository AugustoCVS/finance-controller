import { CircleDollarSign } from "lucide-react";
import { useHeader } from "./header.hook";

export const Header: React.FC = () => {
  const { actions } = useHeader();

  return (
    <div className="w-full flex items-center justify-center">
      <CircleDollarSign
        size={30}
        color="#E1E1E6"
        onClick={actions.handleNavigateToHome}
        className="cursor-pointer"
      />
    </div>
  );
};
