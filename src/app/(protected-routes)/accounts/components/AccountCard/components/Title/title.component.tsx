export const Title: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h2 className="w-full text-center text-3xl text-white mb-8">{text}</h2>
  );
};
