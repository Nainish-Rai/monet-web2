"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const brands = [
  { name: "Brand 1", logo: "https://placehold.co/600x400" },
  { name: "Brand 2", logo: "https://placehold.co/600x400" },
  { name: "Brand 3", logo: "https://placehold.co/600x400" },
  { name: "Brand 4", logo: "https://placehold.co/600x400" },
  { name: "Brand 5", logo: "https://placehold.co/600x400" },
  { name: "Brand 6", logo: "https://placehold.co/600x400" },
];

const BrandsGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    if (scrollWidth > clientWidth) {
      const scroll = () => {
        if (container.scrollLeft >= scrollWidth - clientWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      };

      const intervalId = setInterval(scroll, 30);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Earn More Points</h1>
      <Button variant="default" className="mb-8">
        CLAIM
      </Button>

      <div className="w-full max-w-5xl overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex space-x-8"
          animate={{ x: [0, -1920, 0] }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          {brands.concat(brands).map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-24 bg-white rounded-lg flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandsGallery;
