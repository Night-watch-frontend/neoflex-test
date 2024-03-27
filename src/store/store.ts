import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slice-card";

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
