import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface PlayState {
  Play: Boolean;
  Stop: Boolean;
  Pause: Boolean;
}

const innitialState: PlayState = {
  Play: false,
  Stop: true,
  Pause: false,
};

const PlaySlices = createSlice({
  name: "counter",
  initialState: innitialState,
  reducers: {
    activatePlay: (state) => {
      state.Play = true;
      state.Pause = false;
      state.Stop = false;
    },
    activateStop: (state) => {
      state.Play = false;
      state.Pause = false;
      state.Stop = true;
    },
    activatePause: (state) => {
      state.Play = false;
      state.Pause = true;
      state.Stop = false;
    },
  },
});

export const PlaySelector = {
  getPlay: (state: RootState) => state.Play.Play,
  getStop: (state: RootState) => state.Play.Stop,
  getPause: (state: RootState) => state.Play.Pause,
};

export const { activatePlay, activateStop, activatePause } = PlaySlices.actions;
export default PlaySlices;
