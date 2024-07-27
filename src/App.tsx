import { useState } from "react";
import GamePad, { Square } from "./components/GamePad";

function App() {
  const [history, setHistory] = useState([
    Array(9).fill(null),
  ]); /*array with single item which is an array of 9 nulls like what we did in GamePad State */
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove]; // because index starts from 0!
  const turn: "X" | "O" = currentMove % 2 === 0 ? "X" : "O";

  const handlePlay = (nextSquares: Square[]) => {
    const tempHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(tempHistory);
    setCurrentMove(tempHistory.length - 1); // because index starts from 0!
  };

  const handleReset = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  const jumpTo = (move: number) => {
    setCurrentMove(move);
  };

  const moves = history.map((_squares, index) => {
    const description = index > 0 ? `Go to move #${index}` : "Go to game start";
    return (
      <li key={index}>
        <button
          onClick={jumpTo.bind(null, index)}
          className="bg-emerald-400 text-black px-2 py-1 rounded-sm"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <main className="flex items-center justify-center h-screen gap-8">
      <div>
        <GamePad
          currentSquares={currentSquares}
          turn={turn}
          handlePlay={handlePlay}
          handleReset={handleReset}
        />
      </div>
      <ol className="flex flex-col gap-1">{moves}</ol>
    </main>
  );
}

export default App;
