import { useDispatch } from "react-redux";
import {
  changeBackground,
  changeCell,
  changeGrid,
} from "../store/slices/counterSlices";

function Colors() {
  const dispatch = useDispatch();

  return (
    <div className="text-lg grid grid-cols-1 h-48">
      <div className="text-emerald-500 text-[34px] text-left font-bold mb-3">
        COLOR
      </div>{" "}
      <button
        className="w-[232px] h-[34px] bg-neutral-700 rounded-[10px] shadow  hover:border-b-2  border-emerald-500"
        onClick={() => dispatch(changeBackground("#fff"))}
      >
        Background
      </button>
      <button
        className="w-[232px] h-[34px] bg-neutral-700 rounded-[10px] shadow  hover:border-b-2  border-emerald-500"
        onClick={() => dispatch(changeGrid("#d9d9d9"))}
      >
        Border
      </button>
      <button
        className="w-[232px] h-[34px] bg-neutral-700 rounded-[10px] shadow  hover:border-b-2  border-emerald-500"
        onClick={() => dispatch(changeCell("#fff"))}
      >
        Cell
      </button>
    </div>
  );
}

export default Colors;
