"use client";
import dynamic from "next/dynamic";

import { Button } from "@/components/commons/Button/button.component";
import { TransactionFiler } from "./components/TransactionFilter/transaction-filter.component";
import { useDashboard } from "./dashboard.hook";
import { TransactionCard } from "@/components/commons/TransactionCard/transaction-card.component";
import { SkeletonTransactionCard } from "@/components/commons/SkeletonTransactionCard/skeleton-transaction-card.component";

const DynamicPieCharts = dynamic(
  () =>
    import("./components/PieCharts/pie-charts.component").then(
      (mod) => mod.PieCharts
    ),
  {
    ssr: false,
  }
);
const DynamicBarCharts = dynamic(
  () =>
    import("./components/BarCharts/bar-charts.component").then(
      (mod) => mod.BarCharts
    ),
  {
    ssr: false,
  }
);

export default function Dashboard() {
  const { states, actions } = useDashboard();

  const renderTransactions = () => {
    return (
      <div className="flex flex-col items-center gap-1 mt-8 w-full px-12">
        <SkeletonTransactionCard isLoading={states.getTransactions.isLoading} />
        {states.getTransactions.data?.transactions.map((transaction) => {
          return (
            <TransactionCard
              key={transaction.id}
              title={transaction.description}
              value={transaction.value}
              accountName={transaction.accountName}
              category={transaction.category}
              date={transaction.date}
              shouldHideButtons
            />
          );
        })}
      </div>
    );
  };

  return (
    <section className="h-full min-h-screen flex flex-col items-center bg-gray-800 pl-20 pb-8 overflow-hidden">
      <div className="w-full flex flex-col xl1:flex-row items-center justify-center gap-12 px-12">
        <DynamicPieCharts
          transactions={states.transactions}
          isLoading={states.getTransactions.isLoading}
        />
        <DynamicBarCharts
          transactions={states.transactions}
          isLoading={states.getTransactions.isLoading}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-4 gap-4 px-4">
        <TransactionFiler
          accounts={states.getAccounts.data}
          setFilter={actions.setFilter}
          filter={states.filter}
        />
        <Button onClick={actions.handleClearFilter}>Limpar Filtro</Button>
      </div>
      {renderTransactions()}
    </section>
  );
}
