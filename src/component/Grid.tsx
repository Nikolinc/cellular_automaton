import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import { SizeSelector } from "../store/slices/SizeSlices";
import { useSelector } from "react-redux";
import { PlaySelector } from "../store/slices/PlaySlices";
import { DensitySelector } from "../store/slices/DensitySclice";

const generateRandomGrid = (row: number, col: number, density: number) => {
  const grid = [];
  for (let i = 0; i < row; i++) {
    grid.push(Array.from(Array(col), () => Math.random() < density / 10));
  }
  return grid;
};

const createEmptyGrid = (row: number, col: number) => {
  const grid = [];
  for (let i = 0; i < row; i++) {
    grid.push(Array.from(Array(col), () => false));
  }
  return grid;
};

const Grid: React.FC = () => {
  const numRows = useSelector(SizeSelector.getRows);
  const numCols = useSelector(SizeSelector.getCols);
  const density = useSelector(DensitySelector.getDensity);

  const play = useSelector(PlaySelector.getPlay);

  const [grid, setGrid] = useState<boolean[][]>(
    createEmptyGrid(numRows, numCols)
  );

  useEffect(() => {
    setGrid(createEmptyGrid(numRows, numCols));
  }, [numRows]);

  useEffect(() => {
    if (play) {
      setGrid(generateRandomGrid(numRows, numCols, density));
    }
  }, [play]);

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
