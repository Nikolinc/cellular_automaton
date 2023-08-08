import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface PlayState {
  Play: Boolean;
  Stop: Boolean;
  Pause:Boolean;
}

const innitialState: PlayState = {
  Play: false,
  Stop: true,
  Pause:false
};

const PlaySlices = createSlice({
  name: "counter",
  initialState: innitialState,
  reducers: {
    inversion: (state) => {
      state.Play = !state.Play;
    },
  },
});

export const PlaySelector = {
  getPlay: (state: RootState) => state.Play.Play,
};

export const { inversion } = PlaySlices.actions;
export default PlaySlices;
