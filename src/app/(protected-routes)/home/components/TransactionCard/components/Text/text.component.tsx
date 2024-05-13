import { format } from "date-fns";
import { TextProps } from "./text.types";

export const Text: React.FC<TextProps> = ({ text, isDate, isCategory }) => {
  if (isCategory) {
    const transformedCategory: Record<string, string> = {
      SALARIO: "Salário",
      ALIMENTACAO: "Alimentação",
      TRANSPORTE: "Transporte",
      LAZER: "Lazer",
      EDUCACAO: "Educação",
      VIAGENS: "Viagens",
      SAUDE: "Saúde",
      OUTROS: "Outros",
    };

    return (
      <p className="w-full flex text-start text-white">
        {transformedCategory[text]}
      </p>
    );
  }

  if (isDate) {
    const transformedDate = format(new Date(text), "MM/dd/yyyy");

    return (
      <p className="w-full flex text-start text-white">{transformedDate}</p>
    );
  }

  return <p className=" w-full flex text-start text-white">{text}</p>;
};
