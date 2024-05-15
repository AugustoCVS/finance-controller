import { ButtonSection } from "./components/ButtonSection/button-section.component";
import { Text } from "./components/Text/text.component";
import { Value } from "./components/Value/value.component";
import { TransactionProps } from "./transaction-card.types";

export const TransactionCard: React.FC<TransactionProps> = ({
  accountName,
  date,
  title,
  value,
  category,
  edit,
  remove,
  shouldHideButtons,
}) => {
  return (
    <div className="w-full flex items-center justify-between bg-gray-600 py-5 px-8 rounded-md">
      <Text text={title} />
      <Value value={value} />
      <Text text={accountName} />
      <Text text={category} isCategory />
      <Text text={date.toString()} isDate />
      {!shouldHideButtons && <ButtonSection edit={edit!} remove={remove!} />}
    </div>
  );
};
