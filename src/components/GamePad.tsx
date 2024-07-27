import SquareButton from "./SquareButton";
import CalculateWinner from "../assets/calculateWinner";

export type Square = "X" | "O" | null;

export default function GamePad({
  currentSquares,
  turn,
  handlePlay,
  handleReset,
}: {
  currentSquares: Square[];
  turn: "X" | "O";
  handlePlay: (nextSquares: Square[]) => void;
  handleReset: () => void;
}) {
  const winner = CalculateWinner(currentSquares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${turn}`;

  const handleClickChoice = (index: number) => {
    if (currentSquares[index] || winner) {
      return;
    }

    const tempSquares = currentSquares.slice();
    tempSquares[index] = turn;

    handlePlay(tempSquares);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-xl font-semibold">{status}</span>
      <div className="grid grid-cols-3 grid-rows-3 w-fit border">
        {currentSquares.map((item, index) => (
          <SquareButton
            key={index}
            value={item}
            handleClick={handleClickChoice.bind(null, index)}
          />
        ))}
      </div>
      <button
        onClick={handleReset}
        className="bg-red-400 px-6 py-1 rounded-sm text-black text-lg font-medium hover:bg-red-500 transition-colors"
      >
        reset
      </button>
      <a
        href="https://github.com/MehdiMasoumii"
        className="text-blue-500 underline underline-offset-2"
      >
        by Mehdi Masoumi
      </a>
    </div>
  );
}
