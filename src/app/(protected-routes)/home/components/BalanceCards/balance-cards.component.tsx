import { priceFormatter } from "@/utils/formaters";
import { BalanceCardsProps } from "./balance-cards.types";
import { Header } from "./components/Header/header.component";

export const BalanceCards: React.FC<BalanceCardsProps> = ({
  balance,
  title,
}) => {
  const backgroundColor = () => {
    if (title === "Total" && balance > 0) return "bg-green-500";
    if (title === "Total" && balance < 0) return "bg-red-500";

    return "bg-gray-600";
  };

  return (
    <div
      className={`flex flex-col w-80 h-32 ${backgroundColor()} rounded-md gap-3 p-6`}
    >
      <Header title={title} />
      <h2 className="text-white text-3xl font-bold">
        {priceFormatter.format(balance)}
      </h2>
    </div>
  );
};
