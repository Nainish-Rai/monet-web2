"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";

interface WaitlistSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  imageSrc?: string;
}

export function WaitlistSection({
  title = "Be the first to get access",
  subtitle = "Join us",
  description = "Be amongst the first few to get early access to Monet. Join the waitlist and stand a chance to win gifts, merch & more.",
  buttonText = "Join Waitlist",
  imageSrc = "/images/landing/waitlist.png",
}: WaitlistSectionProps) {
  return (
    <section className="overflow-hidden mb-48 max-w-7xl bg-gradient-to-bl from-[#D6AF503D]/20 from-0% via-black to-[#D6AF503D]/20 px-6 pt-10 rounded-[50px] sm:px-5 shadow-2xl shadow-yellow-800/20 ">
      <div className="flex lg:flex-row items-center gap-5 sm:flex-col">
        <div className="flex flex-col w-[58%] sm:w-full">
          <Image
            src={imageSrc}
            alt="Waitlist promotional image"
            width={500}
            height={439}
            className="object-contain grow w-full aspect-[1.14] sm:mt-10 sm:max-w-full"
          />
        </div>
        <div className="flex flex-col justify-center ml-5 w-[42%] sm:ml-0 sm:w-full">
          <div className="flex flex-col self-stretch my-auto w-full sm:mt-10 sm:max-w-full">
            <div className="flex flex-col font-medium sm:max-w-full">
              <p className="text-sm mb-4 tracking-widest leading-none text-yellow-300 uppercase">
                {subtitle}
              </p>
              <motion.h1
                initial="hidden"
                whileInView="show"
                variants={textVariant(0.1)}
                className="  text-4xl  text-center mt-8 lg:mt-0 lg:text-left lg:text-[60px]  lg:leading-[65px] font-medium max-w-lg"
              >
                {title}
              </motion.h1>
              <p className="mt-3 text-xl text-zinc-400 sm:max-w-full">
                {description}
              </p>
            </div>
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
                {buttonText}
                <ArrowUpRightIcon
                  height={20}
                  width={20}
                  className="invisible duration-200 transition-all group-hover:translate-x-1 group-hover:scale-110 group-hover:visible"
                />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
