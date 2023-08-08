import React from "react";
import { PlaySelector } from "../store/slices/PlaySlices";
import { useDispatch, useSelector } from "react-redux";

function Play() {
  const dispatch = useDispatch();
  const play = useSelector(PlaySelector.getPlay);

  function changePlay(): any {
    throw new Error("Function not implemented.");
  }

  return (
    <button
      className="w-full rounded-[10px] shadow  text-center  bg-neutral-700 text-[34px] font-black text-emerald-500 flex justify-center items-center pb-1 my-8 hover:bg-emerald-500 hover:text-neutral-700"
      onClick={() => {
        dispatch(changePlay());
      }}
    >
      {play ? `Stop` : `Play`}
    </button>
  );
}

export default Play;
