import React, { useEffect, useState } from "react";
import {
  changeCols,
  changeHeight,
  changeRows,
  changeWidth,
} from "../store/slices/SizeSlices";
import { useDispatch } from "react-redux";

function RangeSlider() {
  const [count, setCount] = useState(40);
  const dispatch = useDispatch();

  let row: number;
  let coll: number;
  let size: number;

  useEffect(() => {
    coll = count;
    size = 800 / coll;
    row = 600 / size;

    console.log("coll", coll);
    console.log("size", size);
    console.log("row", row);

    dispatch(changeCols(coll));
    dispatch(changeRows(Math.round(row)));
    dispatch(changeWidth(Math.round(size)));
    dispatch(changeHeight(Math.round(size)));

  }, [count]);

  return (
    <div className="text-lg h-14 mb-10">
      <div className="text-emerald-500 text-[34px] text-left font-bold h-10">
        Size
      </div>
      <input
        className="rounded-lg overflow-hidden appearance-none bg-emerald-500 h-4 w-128 w-full"
        type="range"
        min="10"
        max="100"
        step="10"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
    </div>
  );
}

export default RangeSlider;
