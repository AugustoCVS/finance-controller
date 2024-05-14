import { AccountCardProps } from "./account-card.types";
import { ButtonSection } from "./components/ButtonSection/button-section.component";
import { Content } from "./components/Content/content.component";
import { Title } from "./components/Title/title.component";

export const AccountCard: React.FC<AccountCardProps> = ({
  accountType,
  balance,
  bank,
  description,
  name,
  deleteAccount,
  editAccount,
}) => {
  return (
    <div className="w-[44rem] flex flex-col items-center rounded-2xl p-8 bg-gray-600">
      <Title text={name} />
      <Content
        accountType={accountType}
        balance={balance}
        bank={bank}
        description={description}
      />
      <ButtonSection deleteAccount={deleteAccount} editAccount={editAccount} />
    </div>
  );
};
