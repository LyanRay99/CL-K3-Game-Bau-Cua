import { configureStore } from "@reduxjs/toolkit";
import BauCuaReducer from "./reducer/R_baucua";

export const Store = configureStore({
  reducer: {
    BAUCUA: BauCuaReducer,
  },
});
