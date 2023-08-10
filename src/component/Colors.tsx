import React from "react";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

import PaletteModal from "./PaletteModal";
import {
  ColorSelector,
  changeBackground,
  changeCell,
  changeGrid,
} from "../store/slices/ColorSlices";

function Colors() {
  const [openedBackground, setOpenedBackground] = useState(false);
  const [openedGrid, setOpenedGrid] = useState(false);
  const [openedCell, setOpenedCell] = useState(false);

  const BackgroundRef = useRef<HTMLButtonElement>(null);
  const GridRef = useRef<HTMLButtonElement>(null);
  const CellRef = useRef<HTMLButtonElement>(null);

  const background = useSelector(ColorSelector.getBackground);
  const grid = useSelector(ColorSelector.getGrid);
  const cell = useSelector(ColorSelector.getCell);

  const onClose = () => {
    setOpenedBackground(false);
    setOpenedGrid(false);
    setOpenedCell(false);
  };

  return (
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 bg-[#343434]  text-[#01CC8F] hover:bg-[#01CC8F] hover:text-[#343434]">
        <span className="text-xl font-medium "> COLOR </span>

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

      <ul className="mt-0 space-y-1 px-4  text-sm">
        <li>
          <div className="Background">
            <button
              className="w-3/4 h-[34px] bg-neutral-700 rounded-[10px] shadow  hover:border-b-2  border-emerald-500"
              onClick={() => setOpenedBackground((v) => !v)}
            >
              Background
            </button>
            <PaletteModal
              opened={openedBackground}
              triggerRef={BackgroundRef}
              onClose={onClose}
              color={background}
              changeColor={changeBackground}
            />
          </div>
        </li>
        <li>
          <div className="Grid">
            <button
              className="w-3/4 h-[34px] bg-neutral-700 rounded-[10px] shadow  hover:border-b-2  border-emerald-500"
              onClick={() => setOpenedGrid((v) => !v)}
            >
              Grid
            </button>
            <PaletteModal
              opened={openedGrid}
              triggerRef={GridRef}
              onClose={onClose}
              color={grid}
              changeColor={changeGrid}
            />
          </div>
        </li>
        <li>
          <div className="Cell">
            <button
              className="w-3/4 h-[34px] bg-neutral-700 rounded-[10px] shadow  hover:border-b-2  border-emerald-500"
              onClick={() => setOpenedCell((v) => !v)}
            >
              Cell
            </button>
            <PaletteModal
              opened={openedCell}
              triggerRef={CellRef}
              onClose={onClose}
              color={cell}
              changeColor={changeCell}
            />
          </div>
        </li>
      </ul>
    </details>
  );
}

export default Colors;
