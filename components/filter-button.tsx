import * as React from "react";

interface FilterButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function FilterButton({
  label,
  isActive = false,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      className={`px-6 py-2 whitespace-nowrap rounded-3xl ${
        isActive ? "bg-zinc-800" : "bg-zinc-900"
      } text-yellow-50 font-medium`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
