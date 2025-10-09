import React, { useState, useEffect, useCallback, useRef } from "react";

const ROWS = 7;
const COLS = 50;
const SPEED = 115;

const GameOfLife: React.FC = () => {
  const [grid, setGrid] = useState<boolean[][]>([]);
  const [running, setRunning] = useState(true);
  const [cols, setCols] = useState(COLS);
  const containerRef = useRef<HTMLDivElement>(null);

  const createEmptyGrid = (): boolean[][] => {
    return Array(ROWS)
      .fill(null)
      .map(() => Array(cols).fill(false));
  };

  const randomizeGrid = (): boolean[][] => {
    return Array(ROWS)
      .fill(null)
      .map(() =>
        Array(cols)
          .fill(null)
          .map(() => Math.random() > 0.7),
      );
  };

  const getAliveChar = (): string => {
    return String.fromCharCode(Math.floor(Math.random() * 94) + 33);
  };

  const countNeighbors = (grid: boolean[][], x: number, y: number): number => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newX = x + i;
        const newY = y + j;
        if (newX >= 0 && newX < ROWS && newY >= 0 && newY < cols) {
          count += grid[newX][newY] ? 1 : 0;
        }
      }
    }
    return count;
  };

  const nextGeneration = useCallback(
    (currentGrid: boolean[][]): boolean[][] => {
      const newGrid = createEmptyGrid();

      for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < cols; j++) {
          const neighbors = countNeighbors(currentGrid, i, j);

          if (currentGrid[i][j]) {
            newGrid[i][j] = neighbors === 2 || neighbors === 3;
          } else {
            newGrid[i][j] = neighbors === 3;
          }
        }
      }

      return newGrid;
    },
    [cols],
  );

  useEffect(() => {
    const calculateCols = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const cellSize = 12;
        const newCols = Math.max(1, Math.floor(containerWidth / cellSize));
        setCols(newCols);
      }
    };

    calculateCols();
    window.addEventListener("resize", calculateCols);
    return () => window.removeEventListener("resize", calculateCols);
  }, []);

  useEffect(() => {
    setGrid(randomizeGrid());
  }, [cols]);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setGrid((prev) => nextGeneration(prev));
    }, SPEED);

    return () => clearInterval(interval);
  }, [running, nextGeneration]);

  if (grid.length === 0) {
    return <div className="p-4">Loading...</div>;
  }

  const handleReset = () => {
    setGrid(randomizeGrid());
    setRunning(true);
  };

  return (
    <div className="p-4 w-full">
      <div
        onDoubleClick={() => handleReset()}
        ref={containerRef}
        className="font-kare leading-tight w-full"
      >
        {grid.map((row, i) => (
          <div key={i} className="flex justify-center w-full">
            {row.map((cell, j) => (
              <span
                key={`${i}-${j}`}
                className="inline-block flex-1 text-center select-none"
              >
                {cell ? getAliveChar() : ""}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameOfLife;
