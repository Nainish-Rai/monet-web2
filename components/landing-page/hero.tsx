"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";
import { Button } from "../ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex mx-auto flex-col text-center lg:text-left px-4 lg:px-0 justify-center bg-gradient-to-bl from-[#D6AF503D]/20 from-0% via-black to-black  lg:flex-row w-full pt-24   lg:mt-0 lg:h-screen ">
      {" "}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="w-full flex flex-col lg:pl-16 justify-center items-center lg:items-start  lg:w-1/2">
          <motion.h1
            initial="hidden"
            whileInView="show"
            variants={textVariant(0.1)}
            className="  text-4xl text-center mt-8 lg:mt-0 lg:text-left lg:text-[60px] lg:leading-tight font-medium max-w-lg"
          >
            Step into a New World of Loyalty.
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="show"
            variants={textVariant(0.2)}
            className="mt-4 text-gray-100/70 text-base lg:text-lg max-w-md"
          >
            Discover a new way to earn, swap, & spend points. Unlock value for
            every rupee you spend.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={textVariant(0.3)}
          >
            <Button
              variant={"primary"}
              className="mt-8 w-36 hover:w-40 px-6 py-6  group transition-all  duration-200 text-base text-black rounded-3xl"
              size={"lg"}
            >
              Get Started
              <ArrowUpRightIcon
                height={20}
                width={20}
                className="invisible duration-200 transition-all group-hover:translate-x-1 group-hover:scale-110 group-hover:visible"
              />
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full flex justify-center items-center lg:w-1/2"
        >
          <Image
            src="/images/landing/hero.svg"
            className=""
            width={2000}
            height={2000}
            alt="hero"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
