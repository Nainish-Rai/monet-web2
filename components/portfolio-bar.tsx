import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

function PortfolioBar({}: Props) {
  return (
    <div className="w-full flex h-44  justify-center bg-gradient-to-r drop-shadow-2xl from-[#3B2800]/20 via-[#3B2800]/50  to-[#FFE55C]/20 p-8 max-w-7xl rounded-2xl ">
      <div className="flex flex-col h-full w-full justify-between">
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
      <div className="flex h-full w-[30%] justify-between flex-col gap-2">
        <Link href="/dashboard/exchange">
          <Button className="rounded-full w-full bg-gradient-to-r text-base p-6 px-12 from-[#FFFBE6] to-[#FFE55C]">
            Exchange
          </Button>
        </Link>
        <Link
          href="/dashboard/all-points
        "
        >
          <Button
            variant={"outline"}
            className="rounded-full w-full bg-transparent text-base p-6 border-white/50 px-12"
          >
            Redeem
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PortfolioBar;
