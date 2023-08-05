import { createSlice } from "@reduxjs/toolkit";

const innitialState = {
  background: "#343434",
  grid: "#000",
  cell: "#01CC8F",
};
const counterSlice = createSlice({
  name: "counter",
  initialState: innitialState,
  reducers: {
    changeBackground: (state, actions) => {
      state.background = actions.payload;
    },
    changeGrid: (state, actions) => {
      state.grid = actions.payload;
    },
    changeCell: (state, actions) => {
      state.cell = actions.payload;
    },
  },
});

export const couterSelector = {
  getBackground: (state: { background: string }) => state.background,
  getGrid: (state: { grid: string }) => state.grid,
  getCell: (state: { cell: string }) => state.cell,
};

export const { changeBackground, changeGrid, changeCell } =
  counterSlice.actions;
export default counterSlice;
