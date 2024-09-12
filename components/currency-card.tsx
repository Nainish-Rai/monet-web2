import React from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export interface CurrencyCardProps {
  name: string;
  balance: number;
  amount: number;
  imageSrc: string;
  iconSrc: string;
  type: "send" | "receive";
}

export const CurrencyCard: React.FC<CurrencyCardProps> = ({
  name,
  balance,
  amount,
  imageSrc,
  iconSrc,
  type,
}) => {
  return (
    <Card className="flex flex-col px-8 py-9 mt-3.5 w-full rounded-xl bg-stone-950 bg-opacity-40 max-w-[611px] sm:pl-5 sm:max-w-full">
      <Label className="self-start text-sm leading-none text-white">
        You {type === "send" ? "send" : "get"}
      </Label>
      <div className="flex flex-wrap gap-5 justify-between mt-6 w-full sm:max-w-full">
        <div className="flex gap-2.5">
          <Image
            src={imageSrc}
            alt={`${name} logo`}
            width={43}
            height={43}
            className="object-contain shrink-0 my-auto rounded-full"
          />
          <div className="flex flex-col">
            <div className="flex gap-2 items-center self-start text-2xl font-semibold leading-snug text-white whitespace-nowrap">
              <span className="self-stretch my-auto">{name}</span>
              <Image
                src={iconSrc}
                alt={`${name} icon`}
                width={19}
                height={33}
                className="object-contain shrink-0 self-stretch my-auto"
              />
            </div>
            <p className="text-sm leading-none text-yellow-100">
              Available balance ={" "}
              <span className="font-semibold">{balance} P</span>
            </p>
          </div>
        </div>
        <p className="self-start text-3xl font-semibold leading-none text-right text-white">
          {amount}
        </p>
      </div>
    </Card>
  );
};
