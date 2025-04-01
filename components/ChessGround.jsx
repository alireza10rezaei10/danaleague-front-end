"use client";

import { useEffect, useState } from "react";

const ChessGround = ({ colors, number_of_rows }) => {
  const [numberOfSquares, setNumberOfSquares] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const calculateSquares = () =>
        Math.floor((window.innerWidth + window.outerWidth) / 50) + 1;

      setNumberOfSquares(calculateSquares());

      // Update the number of squares on window resize
      window.addEventListener("resize", () =>
        setNumberOfSquares(calculateSquares())
      );

      return () => {
        window.removeEventListener("resize", () =>
          setNumberOfSquares(calculateSquares())
        );
      };
    }
  }, []);

  if (numberOfSquares === 0) return null; // Prevent rendering until `useEffect` runs

  const squares = Array.from({ length: numberOfSquares });
  const rows = Array.from({ length: number_of_rows });

  return (
    <div className="w-full h-full flex justify-center items-center overflow-x-hidden">
      <div>
        {rows.map((_, rowIndex) => (
          <div key={rowIndex} className="flex w-max">
            {squares.map((_, index) => {
              const colorIndex = (index + rowIndex) % 2; // Alternate colors between rows
              return (
                <div
                  key={index}
                  className={`w-[50px] h-[50px] ${colors[colorIndex]}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChessGround;
