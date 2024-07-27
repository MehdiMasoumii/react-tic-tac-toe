import { Square } from "./GamePad";

type Props = {
  value: Square;
  handleClick: () => void;
};

export default function SquareButton({ value, handleClick }: Props) {
  return (
    <button
      className="bg-blue-600 w-20 h-20 border col-span-1 row-span-1 text-4xl font-bold"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
