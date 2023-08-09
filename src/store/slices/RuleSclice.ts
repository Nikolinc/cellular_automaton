import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface RuleState {
  Birth: number;
  Survive: number[];
}

const innitialState: RuleState = {
  Birth: 3,
  Survive: [2, 3],
};

const RuleSlices = createSlice({
  name: "counter",
  initialState: innitialState,
  reducers: {
    changeRule: (state, actions) => {
      let inputString: string = actions.payload;
      inputString = inputString.replace(/[BC/]/g, "");
      let array = inputString.split("");

      if (!isNaN(Number(array[0]))) state.Birth = Number(array[0]);

      array.shift();

      const newArray: number[] = [];

      array.forEach((element) => {
        if (!isNaN(Number(element))) newArray.push(Number(element));
      });

      state.Survive = newArray;
    },
  },
});

export const RuleSelector = {
  getBirth: (state: RootState) => state.Rule.Birth,
  getSurvive: (state: RootState) => state.Rule.Survive,
};

export const { changeRule } = RuleSlices.actions;
export default RuleSlices;
