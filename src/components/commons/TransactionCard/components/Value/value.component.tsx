import { priceFormatter } from "@/utils/formaters";

export const Value: React.FC<{ value: number }> = ({ value }) => {
  const renderColor = (): string => {
    if (value > 0) return "text-green-500";

    return "text-red-500";
  };

  return (
    <p className={`w-full flex text-start ${renderColor()}`}>
      {priceFormatter.format(value)}
    </p>
  );
};
