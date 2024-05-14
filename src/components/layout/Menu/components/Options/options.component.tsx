import { Home, LayoutDashboard, Wallet } from "lucide-react";
import { OptionsList } from "./options.constants";
import { useOptions } from "./options.hook";

export const Options: React.FC = () => {
  const { actions } = useOptions();

  const renderIcon: Record<string, JSX.Element> = {
    home: (
      <Home
        color="white"
        className="w-6 h-6"
        onClick={() => actions.handleNavigate({ screenName: "home" })}
      />
    ),
    resumo: <LayoutDashboard color="white" className="w-6 h-6" />,
    contas: (
      <Wallet
        color="white"
        className="w-6 h-6"
        onClick={() => actions.handleNavigate({ screenName: "accounts" })}
      />
    ),
  };

  return (
    <nav>
      <ul className="flex flex-col gap-4 mt-12">
        {OptionsList.map((option) => {
          return (
            <li
              key={option.id}
              className={`flex flex-col text-sm justify-center
               items-center h-16 text-gray-100 cursor-pointer p-1 hover:bg-gray-900 rounded
               ${actions.handleChangeBackgroundColor(
                 option.title.toLowerCase()
               )}
               `}
            >
              {renderIcon[option.icon]}
              <span className="text-xs">{option.title}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
