import React from "react";
import Colors from "./component/Colors";
import Grid from "./component/Grid";
import Play from "./component/ButtonPlay";
import RangerSize from "./component/RangeSize";
import RangerRandom from "./component/RangeDensity";

function App() {
  return (
    <div className="unselectable text-center  text-emerald-500 text-[52px] font-bold">
      <div className="mt-2 flex justify-center gap-5">
        <div className="">
          <h1 className="mb-5">Cellular automaton</h1>
          <Grid />
        </div>

        <div
          className="mt-10
        "
        >
          <Play />
          <RangerRandom />
          <RangerSize />
          <Colors />
        </div>
      </div>
    </div>
  );
}

export default App;
