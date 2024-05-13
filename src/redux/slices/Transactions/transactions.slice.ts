import { TransactionsProps } from "@/services/interfaces/transactions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TransactionsProps[] = [];

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions: (_state, action: PayloadAction<TransactionsProps[]>) => {
     return action.payload;
    },
  },
});

export const { setTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;