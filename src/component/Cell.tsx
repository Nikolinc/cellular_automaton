// Cell.tsx
import React from "react";
import { useSelector } from "react-redux";
import { couterSelector } from "../store/slices/counterSlices";

interface CellProps {
  alive: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ alive, onClick }) => {
  const background = useSelector(couterSelector.getBackground);
  const grid = useSelector(couterSelector.getGrid);
  const cell = useSelector(couterSelector.getCell);

  return (
    <div
      className={`cell ${
        alive ? `bg-[${cell}]` : `bg-[${background}]`
      } w-5 h-5 border border-[${grid}] `}
      onClick={() => {
        onClick();
      }}
    />
  );
};

export default Cell;
