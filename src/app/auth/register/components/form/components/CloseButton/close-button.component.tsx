import { PanelRightClose } from "lucide-react";

export const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 top-6 px-4 border-none bg-transparent cursor-pointer"
      onClick={onClick}
    >
      <PanelRightClose color="#7C7C8A" />
    </div>
  );
};
