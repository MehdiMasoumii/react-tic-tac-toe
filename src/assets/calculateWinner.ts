import { Square } from "../components/GamePad";

export default function CalculateWinner(squares: Square[]): Square {
  const permutations = [
    [0, 1, 2], // all of first row's squares be the same e.g. X
    [3, 4, 5], // all of second row's squares be the same e.g. X
    [6, 7, 8], // all of third row's squares be the same e.g. X
    //
    [0, 3, 6], // all of first column's squares be the same e.g. X
    [1, 4, 7], // all of second column's squares be the same e.g. X
    [2, 5, 8], // all of third column's squares be the same e.g. X
    //
    [0, 4, 8], // all of first diameter's squares be the same e.g. X
    [2, 4, 6], // all of second diameter's squares be the same e.g. X
  ];

  for (let i = 0; i < permutations.length; i++) {
    const [a, b, c] = permutations[i];
    if (
      squares[a] &&
      squares[b] &&
      squares[c] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}
