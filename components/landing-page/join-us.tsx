"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";

type Props = {};

function JoinUs({}: Props) {
  return (
    <div className="w-full lg:h-screen bg-[#F7CD46] lg:py-24 py-16 mt-24 lg:mt-32">
      <div className="flex  flex-col-reverse  lg:flex-row w-full px-8 lg:px-0 h-full">
        <div className="flex  w-full mt-12 lg:mt-0 lg:pl-32 text-black gap-8 lg:pt-28 flex-col">
          <motion.h1
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            className="font-syne font-semibold text-3xl lg:text-4xl"
          >
            GET EXCLUSIVE ACCESS <br /> TO OUR LAUNCH EVENT
          </motion.h1>
          <motion.p
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-sm max-w-md leading-normal tracking-wider"
          >
            Be part of an exclusive unveiling of our groundbreaking loyalty
            rewards platform. Discover the future of rewards with decentralized
            $POINTS and advanced blockchain technology. Don&apos;t miss your
            chance – reserve your spot today!
          </motion.p>
          <motion.div
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
          >
            <Button className="bg-black hover:bg-transparent w-fit px-8  hover:text-black hover:border-2 text-white">
              Join
            </Button>
          </motion.div>
        </div>
        <div className="w-full lg:pl-28 lg:mt-8 h-full">
          <Image
            src="/join-us.svg"
            height={1000}
            width={1000}
            className="w-full"
            alt="join-us"
          />
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
