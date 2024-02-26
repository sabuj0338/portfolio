import { MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export default function ArrowNextIconButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="text-primary rounded-full p-1 bg-primary bg-opacity-30 hover:bg-opacity-40"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  );
}
