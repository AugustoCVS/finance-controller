import { Home, LayoutDashboard, Wallet } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { OptionsList } from "./options.constants";

export const Options: React.FC = () => {
  const router = useRouter();
  const pathName = usePathname();

  const renderIcon: Record<string, JSX.Element> = {
    home: (
      <Home
        color="white"
        className="w-6 h-6"
        onClick={() => router.push("/home")}
      />
    ),
    resumo: <LayoutDashboard color="white" className="w-6 h-6" />,
    contas: (
      <Wallet
        color="white"
        className="w-6 h-6"
        onClick={() => router.push("/contas")}
      />
    ),
  };

  const backgroundColor = (option: string) => {
    const transformPath = pathName.split("/")[1];
    return transformPath === option ? "bg-gray-800" : "";
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
               ${backgroundColor(option.title.toLowerCase())}
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
