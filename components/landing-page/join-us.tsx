"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";
import { CaseUpperIcon, TagIcon, UserIcon } from "lucide-react";

type Props = {};

function JoinUs({}: Props) {
  return (
    <div className="w-full bg-[#F7CD46] lg:py-24 py-16 mt-24 lg:mt-32">
      <div className="container">
        <div className="flex  flex-col-reverse  lg:flex-row w-full lg:px-0 h-full">
          <div className="flex w-full mt-12 lg:mt-0 text-black gap-8 flex-col">
            <motion.h1
              variants={textVariant(0.2)}
              initial="hidden"
              whileInView="show"
              className="font-semibold text-3xl lg:text-4xl font-syne"
            >
              Unlock the Power of <br /> Loyalty Points
            </motion.h1>
            <motion.p
              variants={textVariant(0.2)}
              initial="hidden"
              whileInView="show"
              className="text-sm max-w-md leading-normal tracking-wider font-syne"
            >
              Monet is the ultimate loyalty points platform that allows you to
              convert and utilize your points across a wide range of brands and
              businesses. With our innovative rewards system, you can seamlessly
              transfer loyalty points from one brand to another, unlocking
              unprecedented flexibility and value.
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
              className="w-full opacity-40"
              alt="join-us"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-24 lg:gap-32 mt-16 text-secondary font-syne">
          <div className="">
            <UserIcon size={48} className="mb-4" />
            <h2 className="text-2xl font-bold mb-2 font-syne">For Users:</h2>
            <p>Easily convert loyalty points between non-competitor brands.</p>
          </div>
          <div className="">
            <CaseUpperIcon size={48} className="mb-4" />
            <h2 className="text-2xl font-bold mb-2">For Brands:</h2>
            <p>Drive engagement, retention, and acquire new customers.</p>
          </div>
          <div className="">
            <TagIcon size={48} className="mb-4" />
            <h2 className="text-2xl font-bold mb-2">For Loyalty Programs:</h2>
            <p>
              Transform the landscape with our interoperable rewards system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
