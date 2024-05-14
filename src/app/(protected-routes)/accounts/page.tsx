"use client";

import { AccountType, BankTypes } from "@/services/interfaces/account";
import { AccountCard } from "./components/AccountCard/account-card.component";

export default function Accounts() {
  return (
    <>
      <section className="w-full h-full min-h-screen flex flex-col items-center bg-gray-800 pl-20 pb-8">
        <div className="w-full flex items-center justify-center pt-12">
          <AccountCard
            name="Nubank - Corrente"
            accountType={AccountType.CORRENTE}
            balance={1000}
            bank={BankTypes.NUBANK}
            description="Conta para gastos mensais"
          />
        </div>
      </section>
    </>
  );
}
