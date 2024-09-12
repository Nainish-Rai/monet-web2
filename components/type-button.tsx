import * as React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface TypeButtonProps {
  isActive?: boolean;
  onClick?: () => void;
}

export function TypeButton({ isActive = false, onClick }: TypeButtonProps) {
  return (
    <button
      className={`flex gap-2 justify-center items-center px-6 py-2 whitespace-nowrap rounded-3xl ${
        isActive ? "bg-zinc-800" : "bg-zinc-900"
      } text-yellow-50 font-medium`}
      onClick={onClick}
    >
      <span>Type</span>
      <ChevronDown className="h-4 w-4" />
    </button>
  );
}
