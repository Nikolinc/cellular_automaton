import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "./slices/counterSlices";

const store = configureStore({
  reducer: counterSlices.reducer,
});

export default store;
