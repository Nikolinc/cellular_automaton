// Cell.tsx
import React from "react";
import { useSelector } from "react-redux";
import { ColorSelector } from "../store/slices/ColorSlices";
import useResize from "../hooks/useResize";

interface CellProps {
  alive: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ alive, onClick }) => {
  const background = useSelector(ColorSelector.getBackground);
  const grid = useSelector(ColorSelector.getGrid);
  const cell = useSelector(ColorSelector.getCell);

  const tooltipRef = useResize();

  return (
    <div
      ref={tooltipRef}
      style={
        alive
          ? { backgroundColor: cell, border: `1px solid ${grid}` }
          : { backgroundColor: background, border: `1px solid ${grid}` }
      }
      className={`cell border`}
      onClick={() => {
        onClick();
      }}
    />
  );
};

export default Cell;
