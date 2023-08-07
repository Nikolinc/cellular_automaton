import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface ColorState {
  background: string;
  grid: string;
  cell: string;
}

const innitialState: ColorState = {
  background: "#343434",
  grid: "#000",
  cell: "#01CC8F",
};

const ColorSlices = createSlice({
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

export const ColorSelector = {
  getBackground: (state: RootState) => state.Color.background,
  getGrid: (state: RootState) => state.Color.grid,
  getCell: (state: RootState) => state.Color.cell,
};

export const { changeBackground, changeGrid, changeCell } = ColorSlices.actions;
export default ColorSlices;
