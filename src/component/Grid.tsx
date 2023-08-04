import React, { useState } from "react";
import Cell from "./Cell";

const numRows = 30;
const numCols = 40;

const Grid: React.FC = () => {
  const [grid, setGrid] = useState<boolean[][]>(
    Array.from({ length: numRows }, () =>
      Array.from({ length: numCols }, () => false)
    )
  );

  const toggleCell = (row: number, col: number) => {
    const newGrid = [...grid];
    newGrid[row][col] = !newGrid[row][col];
    setGrid(newGrid);
  };

  return (
    <div className={`grid grid-cols-${numCols} gap-0.5`}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              alive={cell}
              onClick={() => toggleCell(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
