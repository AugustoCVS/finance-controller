import { priceFormatter } from "@/utils/formaters";
import { BalanceCardsProps } from "./balance-cards.types";
import { Header } from "./components/Header/header.component";
import { SkeletonComponent } from "@/components/commons/Skeleton/skeleton.component";

export const BalanceCards: React.FC<BalanceCardsProps> = ({
  balance,
  title,
  isLoading,
}) => {
  const backgroundColor = () => {
    if (title === "Total" && balance > 0) return "bg-green-500";
    if (title === "Total" && balance < 0) return "bg-red-500";

    return "bg-gray-600";
  };

  if (isLoading) {
    {
      Array.from({ length: 3 }).map((_, index) => {
        <SkeletonComponent
          key={index}
          height={128}
          width={320}
          baseColor="#EEEEEE"
          borderRadius={6}
          highlightColor="#BFBFBF"
        />;
      });
    }
  }

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
