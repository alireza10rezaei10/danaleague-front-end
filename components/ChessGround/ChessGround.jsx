"use client";

const ChessGround = ({ colors, number_of_rows }) => {
  const number_of_squares =
    Math.floor((window.innerWidth + window.outerWidth) / 50) + 1;

  const squares = Array.from({ length: number_of_squares });
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
