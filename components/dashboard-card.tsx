import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface OfferCardProps {
  imageUrl: string;
  discount: string;
  expiryDate: string;
  brandLogo: string;
}

export default function DashboardCard({
  imageUrl,
  discount,
  expiryDate,
  brandLogo,
}: OfferCardProps) {
  return (
    <article className="flex overflow-hidden relative flex-col pb-8 rounded-3xl bg-zinc-900 max-w-[348px]">
      <Image
        src={imageUrl}
        alt="Offer image"
        width={348}
        height={178}
        className="object-cover relative w-full border-zinc-900 border-b-4  aspect-[1.8]"
      />{" "}
      <div className="rounded-full text-sm absolute top-4 bg-white/80 text-gray-800 p-1 pt-1.5 flex items-center justify-center font-semibold px-3 right-4">
        NEW
      </div>
      <div className="flex flex-col justify-between self-center relative mt-6 px-2 w-full max-w-[284px] min-h-[136px]">
        <Image
          src={brandLogo}
          alt="brand logo"
          width={80}
          height={80}
          className="absolute -top-16  bg-white  left-7 rounded-full border-[6px] mt-2 border-zinc-900 z-10 h-16 w-16 "
        />

        <div className="flex flex-col p-4  max-w-full">
          <h2 className="gap-2.5 self-stretch text-2xl font-bold text-white">
            {discount}
          </h2>
          <p className="mt-2 text-sm text-white text-opacity-70">
            Till {expiryDate}
          </p>
        </div>
        <Button className="self-stretch from-[#FFFBE6] to-[#FFE55C] bg-gradient-to-r px-8 py-5 mt-7 w-full text-base font-bold text-black whitespace-nowrap min-h-[44px] rounded-[50px] ">
          Claim
        </Button>
      </div>
    </article>
  );
}
