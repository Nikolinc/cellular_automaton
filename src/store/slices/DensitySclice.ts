import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface DensityState {
  Value: number;
}

const innitialState: DensityState = {
  Value: 3,
};

const DensitySlices = createSlice({
  name: "counter",
  initialState: innitialState,
  reducers: {
    changeDensity: (state, actions) => {
      state.Value = actions.payload;
    },
  },
});

export const DensitySelector = {
  getDensity: (state: RootState) => state.Density.Value,
};

export const { changeDensity } = DensitySlices.actions;
export default DensitySlices;
