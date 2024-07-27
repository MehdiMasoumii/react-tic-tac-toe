import { useState } from "react";

export default function useTurn(initTurn: "O" | "X") {
  const [turn, setTurn] = useState<"O" | "X">(initTurn);

  const handleChangeTurn = () => {
    if (turn === "O") {
      setTurn("X");
    } else {
      setTurn("O");
    }
  };
  return { turn, setTurn, handleChangeTurn };
}
