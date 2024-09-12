import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

function PortfolioCard({}: Props) {
  return (
    <div className="w-full  flex h-56 justify-between bg-gradient-to-l drop-shadow-2xl from-[#3B2800]/50 via-[#3B2800]/80  to-[#FFE55C]/40 p-8 max-w-xl rounded-3xl ">
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center">
          {" "}
          <h2 className="text-2xl font-semibold text-gray-100/70">
            Your Portfolio
          </h2>
          <ChevronRight
            size={24}
            className="text-gray-100/70 ml-2 font-semibold"
          />
        </div>
        <div className="flex mt-4  items-end">
          <Image
            src="/images/point.png"
            alt="coin"
            width={64}
            height={64}
            className="w-10 p-1 h-10"
          />
          <p className="ml-2 text-4xl font-semibold">3,821</p>
          <p className="ml-2 text-sm font-semibold text-green-500 pb-1 ">
            +1.2%
          </p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
