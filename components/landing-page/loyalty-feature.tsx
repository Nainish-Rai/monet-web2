import Image from "next/image";
import React from "react";

export interface LoyaltyFeatureProps {
  iconSrc: string;
  title: string;
  description: string;
}

export function LoyaltyFeature({
  iconSrc,
  title,
  description,
}: LoyaltyFeatureProps) {
  return (
    <div className="flex  gap-10 items-start mt-12 max-md:mt-10">
      <Image
        loading="lazy"
        src={iconSrc}
        alt=""
        width={60}
        height={60}
        className="object-contain shrink-0 aspect-square w-[60px]"
      />
      <div className="flex flex-col justify-center min-w-[240px] w-[418px]">
        <h4 className="text-2xl font-bold leading-none text-neutral-200">
          {title}
        </h4>
        <p className="mt-2 text-base font-medium leading-6 text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}
