import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface PointsExchangeCardProps {
  title: string;
  logoSrc: string;
  brandName: string;
  availableBalance: number;
  points: number;
}

export function PointsExchangeCard({
  title,
  logoSrc,
  brandName,
  availableBalance,
  points,
}: PointsExchangeCardProps) {
  return (
    <Card className="flex flex-col px-8 py-9 mt-3.5 w-full rounded-xl bg-stone-950 bg-opacity-40 max-w-[611px] sm:pl-5 sm:max-w-full">
      <div className="self-start text-sm leading-none text-white">{title}</div>
      <div className="flex flex-wrap gap-5 justify-between mt-6 w-full sm:max-w-full">
        <div className="flex gap-2.5">
          <Image
            src={logoSrc}
            alt={`${brandName} logo`}
            width={43}
            height={43}
            className="object-cover shrink-0 my-auto rounded-full"
          />
          <div className="flex flex-col">
            <div className="flex gap-2 items-center self-start text-2xl font-semibold leading-snug text-white whitespace-nowrap">
              <div className="self-stretch my-auto">{brandName}</div>
              <ChevronDown className="self-stretch my-auto" />
            </div>
            <div className="text-sm leading-none text-yellow-100">
              Available balance ={" "}
              <span className="font-semibold">{availableBalance} P</span>
            </div>
          </div>
        </div>
        <div className="self-start text-3xl font-semibold leading-none text-right text-white">
          {points}
        </div>
      </div>
    </Card>
  );
}
