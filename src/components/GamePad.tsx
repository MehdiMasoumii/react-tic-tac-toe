import { useState } from "react";
import SquareButton from "./SquareButton";
import useTurn from "../hooks/Turn";
import CalculateWinner from "../assets/calculateWinner";

export type Square = "X" | "O" | null;

export default function GamePad() {
  const [squares, setSquares] = useState<Square[]>(Array(9).fill(null));
  const { turn, handleChangeTurn, setTurn } = useTurn("X");

  const winner = CalculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${turn}`;

  const handleClickChoice = (index: number) => {
    if (squares[index] || winner) {
      return;
    }
    const tempSquares = squares.slice();
    tempSquares[index] = turn;
    setSquares(tempSquares);
    handleChangeTurn();
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setTurn("X");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-xl font-semibold">{status}</span>
      <div className="grid grid-cols-3 grid-rows-3 w-fit border">
        {squares.map((item, index) => (
          <SquareButton
            key={index}
            value={item}
            handleClick={handleClickChoice.bind(null, index)}
          />
        ))}
      </div>
      <button
        onClick={handleReset}
        className="bg-red-400 px-4 py-2 rounded-xl text-black text-lg font-medium hover:bg-red-500 transition-colors"
      >
        reset
      </button>
    </div>
  );
}
