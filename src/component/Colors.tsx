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
    <div className="text-lg grid grid-cols-1 h-48">
      <div className="text-emerald-500 text-[34px] text-left font-bold mb-3">
        COLOR
      </div>
      <div className="Background">
        <button
          className="w-[232px] h-[34px] bg-neutral-700 rounded-[10px] shadow  hover:border-b-2  border-emerald-500"
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

      <div className="Grid">
        <button
          className="w-[232px] h-[34px] bg-neutral-700 rounded-[10px] shadow  hover:border-b-2  border-emerald-500"
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
      <div className="Cell">
        <button
          className="w-[232px] h-[34px] bg-neutral-700 rounded-[10px] shadow  hover:border-b-2  border-emerald-500"
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
    </div>
  );
}

export default Colors;
