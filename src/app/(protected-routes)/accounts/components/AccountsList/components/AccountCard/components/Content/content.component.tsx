import { priceFormatter } from "@/utils/formaters";
import { InfoRow } from "./components/InfoRow/info-row.component";
import { ContentProps } from "./content-types";

export const Content: React.FC<ContentProps> = ({
  accountType,
  balance,
  bank,
  description,
}) => {
  const bankName: Record<string, string> = {
    ITAU_UNIBANCO: "Itaú Unibanco",
    BRADESCO: "Bradesco",
    SANTANDER: "Santander",
    BTG_PACTUAL: "BTG Pactual",
    NUBANK: "Nubank",
    C6: "C6",
    INTER: "Inter",
    CAIXA: "Caixa",
    OUTROS: "Outros",
  };

  const accountTypeName: Record<string, string> = {
    CORRENTE: "Corrente",
    POUPANCA: "Poupança",
    SALARIO: "Salário",
    PAGAMENTOS: "Pagamentos",
    OUTRAS: "Outras",
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <InfoRow label="Banco" value={bankName[bank]} />
      <InfoRow label="Saldo" value={priceFormatter.format(balance)} />
      <InfoRow label="Tipo de conta" value={accountTypeName[accountType]} />
      <InfoRow label="Descrição" value={description} isDescription />
    </div>
  );
};
