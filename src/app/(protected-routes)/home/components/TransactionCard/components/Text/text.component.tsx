import { format } from "date-fns";
import { TextProps } from "./text.types";

export const Text: React.FC<TextProps> = ({ text, isDate }) => {
  if (isDate) {
    const transformedDate = format(new Date(text), "MM/dd/yyyy");

    return (
      <p className="w-full flex text-start text-white">{transformedDate}</p>
    );
  }

  return <p className=" w-full flex text-start text-white">{text}</p>;
};
