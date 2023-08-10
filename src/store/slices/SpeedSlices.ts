import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface SpeedState {
  Value: number;
}

const innitialState: SpeedState = {
  Value: 200,
};

const SpeedSlices = createSlice({
  name: "counter",
  initialState: innitialState,
  reducers: {
    changeSpeed: (state, actions) => {
      state.Value = actions.payload;
    },
  },
});

export const SpeedSelector = {
  getSpeed: (state: RootState) => state.Speed.Value,
};

export const { changeSpeed } = SpeedSlices.actions;
export default SpeedSlices;
