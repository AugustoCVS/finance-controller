import { TextProps } from "./text.types";

export const Text: React.FC<TextProps> = ({ text, isDate }) => {
  if (isDate) {
    return (
      <p className="w-full flex text-start text-white">
        {new Date(text).toLocaleDateString()}
      </p>
    );
  }

  return <p className=" w-full flex text-start text-white">{text}</p>;
};
