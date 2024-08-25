import { ArrowUpCircle, ChevronUpCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeText: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeText,
}) => {
  return (
    <div className="lg:w-1/3 w-full p-2">
      <article className="flex flex-col justify-between p-6  rounded-xl bg-stone-900 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
        <header className="flex gap-10 justify-between items-center w-full text-sm font-medium text-zinc-300">
          <h2 className="self-stretch my-auto">{title}</h2>
          <ChevronUpCircleIcon size={20} />
        </header>
        <div className="flex flex-col justify-center self-start mt-6">
          <p className="gap-3 self-start text-2xl font-bold text-white whitespace-nowrap">
            {value}
          </p>
          <p className="mt-3 text-xs text-neutral-400">
            <span className="font-semibold text-green-600">{change}</span>
            <span> {changeText}</span>
          </p>
        </div>
      </article>
    </div>
  );
};

export default StatCard;
