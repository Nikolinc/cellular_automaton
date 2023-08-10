import React from "react";
import Colors from "./component/Colors";
import Grid from "./component/Grid";
import Play from "./component/ButtonPlay";
import RangerSize from "./component/RangeSize";
import RangerDensity from "./component/RangeDensity";
import InputRule from "./component/InputRule";
import SpeedDensity from "./component/RangeSpeed";

function App() {
  return (
    <div className="unselectable text-center  text-emerald-500 text-[52px] font-bold">
      <div className="mt-2 flex justify-center gap-5">
        <div className="">
          <h1 className="mb-5">Cellular automaton</h1>
          <Grid />
        </div>

        <div
          className="mt-10 w-[350px]
        "
        >
          <Play />
          <InputRule />
          <SpeedDensity />
          <RangerDensity />
          <RangerSize />
          <Colors />
        </div>
      </div>
    </div>
  );
}

export default App;
