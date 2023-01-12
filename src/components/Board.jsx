import React from "react";
import Square from "./Square";

const Board = ({
  squares,
  setSquares,
  player,
  setPlayer
}) => {
  return (
    <div className="container">
      {squares.map((square, index) => {
        return (
          <Square
            key={Math.random().toString()}
            squareValue={square}
            index={index}
            squares={squares}
            setSquares={setSquares}
            player={player}
            setPlayer={setPlayer}
          />
        );
      })}
    </div>
  );
};

export default Board;
