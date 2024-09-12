import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface MostUnusedItemProps {
  title: string;
  imageSrc: string;
  companyName: string;
  points: number;
  pointsGained: number;
}

export function FeaturedItemBar({
  title,
  imageSrc,
  companyName,
  points,
  pointsGained,
}: MostUnusedItemProps) {
  return (
    <Card className="flex bg-gradient-to-r from-zinc-900 via-zinc-900 to-red-500/30  gap-8 items-center px-10 py-4 font-bold rounded-3xl  w-full sm:w-full sm:px-5">
      <h3 className="flex-1 shrink self-stretch my-auto text-xl font-medium basis-0 text-red-400 text-opacity-60">
        {title}
      </h3>
      <div className="flex gap-3 items-center self-stretch my-auto w-48 text-xl whitespace-nowrap text-white text-opacity-60">
        <Image
          src={imageSrc}
          alt={`${companyName} logo`}
          width={24}
          height={24}
          className="object-contain shrink-0 self-stretch my-auto aspect-square"
        />
        <h3 className="flex-1 shrink self-stretch my-auto basis-0">
          {companyName}
        </h3>
      </div>
      <div className="flex gap-3 items-center self-stretch my-auto whitespace-nowrap w-[170px]">
        <div className="flex gap-3 items-end self-stretch my-auto">
          <div className="flex gap-2 items-center">
            <div className="flex flex-col self-stretch my-auto w-5 text-xs">
              <div className="flex flex-col justify-center p-1 w-8 rounded-full">
                <Image
                  src="/images/point.png"
                  alt="coin"
                  width={64}
                  height={64}
                  className="w-5 aspect-square h-5"
                />
              </div>
            </div>
            <h3 className="self-stretch my-auto text-2xl text-white">
              {points}
            </h3>
          </div>
        </div>
      </div>
      <h3 className="self-stretch my-auto text-xl font-semibold text-white">
        +{pointsGained}P
      </h3>
    </Card>
  );
}
