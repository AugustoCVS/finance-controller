import { Select } from "@/components/commons/Select/select.component";
import { TransactionFilterProps } from "./transaction-filter.types";
import { TransactionCategory } from "@/services/interfaces/transactions";
import { CategoryList } from "@/utils/transactions";

export const TransactionFiler: React.FC<TransactionFilterProps> = ({
  accounts,
  setFilter,
  filter,
}) => {
  return (
    <div className="w-full flex items-center justify-center gap-8">
      <Select
        label="Selecione uma conta"
        onChange={(e) =>
          setFilter({ accountId: e.target.value, category: filter.category })
        }
        value={filter.accountId}
      >
        {accounts?.map((account) => (
          <option key={account.id} value={account.id}>
            {account.name}
          </option>
        ))}
      </Select>
      <Select
        label="Selecione uma categoria"
        onChange={(e) =>
          setFilter({
            category: e.target.value as TransactionCategory,
            accountId: filter.accountId,
          })
        }
        value={filter.category}
      >
        {CategoryList.map((account) => (
          <option key={account.id} value={account.value}>
            {account.label}
          </option>
        ))}
      </Select>
    </div>
  );
};
