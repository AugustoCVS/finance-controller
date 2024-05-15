"use client";

import { Button } from "@/components/commons/Button/button.component";
import { TransactionFiler } from "./components/TransactionFilter/transaction-filter.component";
import { useDashboard } from "./dashboard.hook";
import { TransactionCard } from "@/components/commons/TransactionCard/transaction-card.component";
import { SkeletonTransactionCard } from "@/components/commons/SkeletonTransactionCard/skeleton-transaction-card.component";
import { PieCharts } from "./components/PieCharts/pie-charts.component";
import { BarCharts } from "./components/BarCharts/bar-charts.component";

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
        <PieCharts
          transactions={states.transactions}
          isLoading={states.getTransactions.isLoading}
        />
        <BarCharts
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
