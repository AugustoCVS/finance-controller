import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/User/user.slice";
import transactionsReducer from "./slices/Transactions/transactions.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;