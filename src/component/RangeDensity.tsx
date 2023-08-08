import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeDensity } from "../store/slices/DensitySclice";

function RangerDensity() {
  const [count, setCount] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeDensity(count));
  }, [count]);

  return (
    <div className="text-lg h-14 mb-10">
      <div className="text-emerald-500 text-[34px] text-left font-bold h-10">
        Density
      </div>
      <input
        className="rounded-lg overflow-hidden appearance-none bg-emerald-500 h-4 w-128 w-full"
        type="range"
        min="1"
        max="8"
        step="1"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
    </div>
  );
}

export default RangerDensity;
