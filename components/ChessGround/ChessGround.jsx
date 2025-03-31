"use client";

const ChessGround = () => {
  // Calculate number of squares based on window width directly
  const numberOfSquares =
    Math.floor((window.innerWidth + window.outerWidth) / 50) + 1;

  const colors = ["bg-gray-700", "bg-gray-300"];
  const squares = Array.from({ length: numberOfSquares });

  return (
    <div className="w-full h-full flex justify-center items-center overflow-x-hidden">
      <div>
        {[0, 1].map((rowIndex) => (
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
