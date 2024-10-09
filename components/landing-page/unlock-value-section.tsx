"use client";
import React from "react";

import { Button } from "../ui/button";
import Image from "next/image";
import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";

const offerItems = [
  {
    iconSrc: "/images/landing/tick.svg",
    text: "Earn anywhere, spend everywhere",
  },
  {
    iconSrc: "/images/landing/tick.svg",
    text: "Personalised spend recommendations",
  },
  {
    iconSrc: "/images/landing/tick.svg",
    text: "Member-only offers & incentives",
  },
];
export function UnlockValueSection() {
  return (
    <section className="flex gap-10  mt-48 ">
      <div className="flex pl-44 flex-col items-start my-auto text-xl font-bold text-neutral-200 max-md:max-w-full">
        <h2 className="text-sm font-medium  tracking-widest leading-none text-yellow-300 uppercase">
          what we offer
        </h2>
        <h3 className="self-stretch mt-2 text-5xl font-medium text-white leading-[65px] max-w-3xl max-md:text-4xl max-md:leading-[60px]">
          Unlock More Value From Every Purchase
        </h3>
        {offerItems.map((item, index) => (
          <OfferItem key={index} {...item} />
        ))}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={textVariant(0.3)}
        >
          <Button
            variant={"primary"}
            className="mt-8 w-48 hover:w-52 px-6 py-6  group transition-all  duration-200 text-base text-black rounded-3xl"
            size={"lg"}
          >
            Start Your Journey
            <ArrowUpRightIcon
              height={20}
              width={20}
              className="invisible duration-200 transition-all group-hover:translate-x-1 group-hover:scale-110 group-hover:visible"
            />
          </Button>
        </motion.div>
      </div>
      <div className="flex flex-col justify-center w-[80%] items-start py-20 rounded-[50px] max-md:max-w-full">
        <div className="relative  pt-2 pb-14 min-h-[479px]  max-md:max-w-full">
          <Image
            src={"/images/landing/unlock-value.png"}
            width={2000}
            height={2000}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export interface OfferItemProps {
  iconSrc: string;
  text: string;
}

export function OfferItem({ iconSrc, text }: OfferItemProps) {
  return (
    <div className="flex gap-5 mt-6 leading-none">
      <Image
        loading="lazy"
        width={60}
        height={60}
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 aspect-square w-[50px]"
      />
      <div className="grow my-auto w-fit">{text}</div>
    </div>
  );
}
