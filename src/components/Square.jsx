import React from "react";

const Square = ({
  squares,
  setSquares,
  player,
  setPlayer,
  index,
  squareValue,
}) => {
  console.log(squares, player);

  const handleClick = () => {
    if (squareValue === "") {
      if (player) {
        squares[index] = "X";
      } else {
        squares[index] = "O";
      }
      setSquares(squares);
      setPlayer(!player);
    }
  };
  return (
    <div className="square" onClick={handleClick}>
      {squareValue === "O" ? (
        <img
          src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png"
          alt="logo"
        />
      ) : (
        squareValue
      )}
    </div>
  );
};
export default Square;
