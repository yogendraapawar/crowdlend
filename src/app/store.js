import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import flagReducer from "../features/flags/flagsSlice"
import globalReducer from "../features/global/globalSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    flags: flagReducer,
    global: globalReducer,
  },
});
