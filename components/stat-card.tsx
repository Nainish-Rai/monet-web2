import * as React from "react";
import Image from "next/image";

interface StatCardProps {
  title: string;
  percentage: string;
  companyName: string;
  points: number;
  imageSrc: string;
  titleColor?: string;
  backgroundGradient?: string;
}

export function StatCard({
  title,
  percentage,
  companyName,
  points,
  imageSrc,
  titleColor = "text-white text-opacity-60",
  backgroundGradient = "bg-gradient-to-tl from-black via-black to-blue-600",
}: StatCardProps) {
  return (
    <section
      className={` ${backgroundGradient} flex overflow-hidden flex-col flex-1 shrink self-stretch p-10 my-auto rounded-3xl basis-0 bg-zinc-900/50  min-w-[240px] sm:px-8`}
    >
      <header className="flex gap-10 items-center w-full">
        <h2
          className={`flex-1 shrink self-stretch my-auto text-2xl font-medium ${titleColor}`}
        >
          {title}
        </h2>
        <div className="gap-2.5 self-stretch my-auto text-xl font-semibold text-white">
          {percentage}
        </div>
      </header>
      <div className="flex gap-10 justify-between items-center mt-8 w-full whitespace-nowrap">
        <div className="flex gap-3 items-center self-stretch my-auto text-xl font-medium text-white text-opacity-60">
          <Image
            src={imageSrc}
            alt={`${companyName} logo`}
            width={40}
            height={40}
            className="object-cover bg-white shrink-0  my-auto rounded-[200px]"
          />
          <div className="self-stretch my-auto">{companyName}</div>
        </div>
        <div className="flex gap-3 items-center self-stretch my-auto font-bold">
          <div className="flex gap-3 items-end self-stretch my-auto">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col self-stretch my-auto  text-xs">
                <Image
                  src="/images/point.png"
                  alt="coin"
                  width={64}
                  height={64}
                  className="w-5 h-5"
                />
              </div>
              <div className="self-stretch my-auto text-3xl text-white">
                {points}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
