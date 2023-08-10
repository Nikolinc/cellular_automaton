import React, { useEffect, useState } from "react";
import {
  changeCols,
  changeHeight,
  changeRows,
  changeWidth,
} from "../store/slices/SizeSlices";
import { useDispatch } from "react-redux";

function RangerSize() {
  const [count, setCount] = useState(40);
  const dispatch = useDispatch();

  useEffect(() => {
    let coll = count;
    let size = 800 / coll;
    let row = 600 / size;

    dispatch(changeCols(coll));
    dispatch(changeRows(Math.round(row)));
    dispatch(changeWidth(Math.round(size)));
    dispatch(changeHeight(Math.round(size)));
  }, [count]);

  return (
    <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 bg-[#343434]  text-[#01CC8F] hover:bg-[#01CC8F] hover:text-[#343434]">
      <span className="text-xl font-medium "> Size </span>
    
      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>
    
    <ul className="mt-0 space-y-1 px-4">
      <li>
          <input
            className="rounded-lg overflow-hidden appearance-none bg-emerald-500 h-4 w-128 w-3/4"
            type="range"
            min="10"
            max="100"
            step="10"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
      </li>
    </ul>
    </details>
  );
}

export default RangerSize;


