import React from "react";

interface CellProps {
  alive: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ alive, onClick }) => {
  return (
    <div
      className={`cell ${alive ? "bg-black" : "bg-gray-100"} w-6 h-6 border`}
      onClick={onClick}
    />
  );
};

export default Cell;
