import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import { SizeSelector } from "../store/slices/SizeSlices";
import { useSelector } from "react-redux";
import { PlaySelector } from "../store/slices/PlaySlices";
import { DensitySelector } from "../store/slices/DensitySclice";

const updateGrid = (grid: boolean[][], numRows: number, numCols: number) => {
  const newGrid = grid.map((row) => [...row]);

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const cell = grid[row][col];
      const neighbors = countAliveNeighbors(grid, row, col, numRows, numCols);

      if (cell) {
        if (neighbors < 2 || neighbors > 3) {
          newGrid[row][col] = false;
        }
      } else {
        if (neighbors === 3) {
          newGrid[row][col] = true;
        }
      }
    }
  }
  return newGrid;
};

// Функция для подсчета живых соседей клетки
const countAliveNeighbors = (
  grid: boolean[][],
  row: number,
  col: number,
  numRows: number,
  numCols: number
) => {
  let count = 0;
  const neighborsOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (const [dx, dy] of neighborsOffsets) {
    const newRow = row + dx;
    const newCol = col + dy;

    if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
      count += grid[newRow][newCol] ? 1 : 0;
    }
  }

  return count;
};

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
  const stope = useSelector(PlaySelector.getStop);
  const [firstStart, setfirstStart] = useState<boolean>(false);

  const [grid, setGrid] = useState<boolean[][]>(
    createEmptyGrid(numRows, numCols)
  );

  useEffect(() => {
    setGrid(createEmptyGrid(numRows, numCols));
  }, [numRows]);

  useEffect(() => {
    if (play && !firstStart) {
      setGrid(generateRandomGrid(numRows, numCols, density));
      setfirstStart(true);
    }
  }, [play]);

  useEffect(() => {
    if (play) {
      const intervalId = setInterval(() => {
        setGrid((prevGrid) => updateGrid(prevGrid, numRows, numCols));
      }, 200);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [play, updateGrid]);

  useEffect(() => {
    if (stope) {
      setGrid(createEmptyGrid(numRows, numCols));
      setfirstStart(false);
    }
  }, [stope]);

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
