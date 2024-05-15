import { InfoRowProps } from "./info-row.types";

export const InfoRow: React.FC<InfoRowProps> = ({
  label,
  value,
  isDescription,
}) => {
  const hasDivider = isDescription
    ? "mb-12 text-center"
    : "border-b border-gray-900";

  return (
    <div
      className={`w-full flex xsm:flex-col sm:flex-row justify-between items-center ${hasDivider} flex-1 pb-4`}
    >
      <span className="text-white text-2xl font-bold">{label}</span>
      <span className="text-white text-xl flex-1 sm:text-end">{value}</span>
    </div>
  );
};
