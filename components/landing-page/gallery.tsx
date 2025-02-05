"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";

const Gallery = () => {
  return (
    <motion.div
      variants={textVariant(0.2)}
      initial="hidden"
      whileInView="show"
      className="relative w-full h-48 max-w-7xl lg:h-[450px]"
    >
      <Image
        src="/hero-gallery.png"
        alt="gallery"
        fill
        className="object-cover"
      />
    </motion.div>
  );
};

export default Gallery;
