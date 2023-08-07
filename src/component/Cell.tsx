// Cell.tsx
import React, { useRef } from "react";
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
  const tooltipRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={tooltipRef}
      style={
        alive
          ? { backgroundColor: cell, border: `1px solid ${grid}` }
          : { backgroundColor: background, border: `1px solid ${grid}` }
      }
      className={`cell w-5 h-5 border  `}
      onClick={() => {
        onClick();
      }}
    />
  );
};

export default Cell;
