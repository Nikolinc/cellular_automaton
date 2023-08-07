import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface SizeState {
  Rows: number;
  Cols: number;
  Width: number;
  Height: number;
}

const innitialState: SizeState = {
  Rows: 30,
  Cols: 40,
  Width: 20,
  Height: 20,
};

const SizeSlice = createSlice({
  name: "counter",
  initialState: innitialState,
  reducers: {
    changeRows: (state, actions) => {
      state.Rows = actions.payload;
    },
    changeCols: (state, actions) => {
      state.Cols = actions.payload;
    },
    changeWidth: (state, actions) => {
      state.Width = actions.payload;
    },
    changeHeight: (state, actions) => {
      state.Height = actions.payload;
    },
  },
});

export const SizeSelector = {
  getRows: (state: RootState) => state.Size.Rows,
  getCols: (state: RootState) => state.Size.Cols,
  getWidth: (state: RootState) => state.Size.Width,
  getHeight: (state: RootState) => state.Size.Height,
};

export const { changeRows, changeCols, changeWidth, changeHeight } =
  SizeSlice.actions;
export default SizeSlice;
