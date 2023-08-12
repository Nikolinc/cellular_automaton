import React, { useState } from "react";
import {
  PlaySelector,
  activatePause,
  activatePlay,
  activateStop,
} from "../store/slices/PlaySlices";
import { useDispatch, useSelector } from "react-redux";
function Play() {

  const dispatch = useDispatch();
  const play = useSelector(PlaySelector.getPlay);
  const pause = useSelector(PlaySelector.getPause);
  const [firstStart, setfirstStart] = useState<boolean>(true);


  return (
    <div className="flex items-center justify-center">
      {Boolean(!play && firstStart) ?(
        <button
          className={" w-3/4 rounded-[10px] shadow  text-center  bg-neutral-700 text-[34px] font-black text-emerald-500 flex justify-center items-center pb-1.5 my-8 hover:bg-emerald-500 hover:text-neutral-700"}
          onClick={() => {
            dispatch(activatePlay());
            setfirstStart(false);
          }}
        >
          Play
          <svg
            fill={"#01CC8F"}
            className="mt-2"
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M298-161v-644l505 322-505 322Zm91-322Zm0 155 245-155-245-155v310Z" />
          </svg>
        </button>
      ):(
        <div className="flex justify-center items-center gap-3">
          <button
            className={(play?`bg-emerald-500 text-neutral-700`:` bg-neutral-700 text-emerald-500`) + " w-1/3 rounded-[10px] shadow  text-center px-3.5 text-[34px] font-black text-emerald-500 flex justify-center items-center py-0.4  my-8 hover:bg-emerald-500 hover:text-neutral-700"}
            onClick={() => {
              dispatch(activatePlay());
            }}
          >
            <svg
              fill={play?"#343434":"#01CC8F"}
              className="mt-2"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M298-161v-644l505 322-505 322Zm91-322Zm0 155 245-155-245-155v310Z" />
            </svg>
          </button>
          <button
            className={(pause?`bg-emerald-500 text-neutral-700`:` bg-neutral-700 text-emerald-500`) + " w-1/3 rounded-[10px] shadow  text-center px-3.5 text-[34px] font-black flex justify-center items-center py-1  my-8  hover:bg-emerald-500 hover:text-neutral-700"}
            onClick={() => {
              dispatch(activatePause());
            }}
          >
            <svg
              fill={pause?"#343434":"#01CC8F"}
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M524-158v-645h279v645H524Zm-367 0v-645h279v645H157Zm459-92h95v-461h-95v461Zm-367 0h95v-461h-95v461Zm0-461v461-461Zm367 0v461-461Z" />
            </svg>
          </button>
          <button
            className=" w-1/3 rounded-[10px] shadow  text-center px-3.5 bg-neutral-700 text-[34px] font-black text-emerald-500 flex justify-center items-center py-1 my-8  hover:bg-emerald-500 hover:text-neutral-700"
            onClick={() => {
              dispatch(activateStop());
            }}
          >
            <svg
              fill={"#01CC8F"}
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M309-651v342-342Zm-91 433v-525h525v525H218Zm91-91h342v-342H309v342Z" />
            </svg>
          </button>
        </div>
      ) }
    </div>
  );
}

export default Play;