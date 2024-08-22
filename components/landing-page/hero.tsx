"use client";
import React from "react";
import Gallery from "./gallery";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="w-full flex flex-col-reverse items-center">
      <Gallery />
      <div className="flex flex-col items-center py-12">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold font-syne text-center  leading-tight"
        >
          Revolutionizing loyalty programs with <br /> seamless rewards
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          animate={{ opacity: 1 }}
        >
          <Button className="mt-4 p-5 bg-yellow-400">Get Started</Button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
