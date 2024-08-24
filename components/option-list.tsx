"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface OptionListProps {
  options: string[];
  onActiveChange?: (activeOption: string) => void;
  onOptionSelect?: (selectedOption: string) => void;
}

const OptionList: React.FC<OptionListProps> = ({
  options,
  onActiveChange,
  onOptionSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToActiveItem = (index: number) => {
    if (listRef.current) {
      const itemHeight = listRef.current.children[index].clientHeight;
      const offsetTop =
        itemHeight * index - listRef.current.clientHeight / 2 + itemHeight / 2;
      listRef.current.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (listRef.current) {
      const { scrollTop, clientHeight } = listRef.current;
      const itemHeight = listRef.current.children[0].clientHeight;
      const middleIndex = Math.round(
        (scrollTop + clientHeight / 2) / itemHeight,
      );
      setActiveIndex(middleIndex);
    }
  };

  useEffect(() => {
    if (listRef.current) {
      const { clientHeight } = listRef.current;
      const itemHeight = listRef.current.children[0].clientHeight;
      const middleIndex = Math.round(clientHeight / itemHeight / 2);
      setActiveIndex(middleIndex);
      scrollToActiveItem(middleIndex); // Scroll to the middle item initially
    }
  }, []);

  useEffect(() => {
    if (onActiveChange) {
      onActiveChange(options[activeIndex]);
    }
  }, [activeIndex, onActiveChange, options]);

  const handleOptionClick = (index: number) => {
    setActiveIndex(index);
    scrollToActiveItem(index); // Scroll to the selected item
    if (onOptionSelect) {
      onOptionSelect(options[index]);
    }
  };

  useEffect(() => {
    handleScroll(); // Initialize the correct active item on first render
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100 rounded-lg overflow-hidden">
      <div
        ref={listRef}
        onScroll={handleScroll}
        className="overflow-y-auto max-h-[400px] w-full scroll-smooth"
      >
        {options.map((option, index) => {
          const isActive = index === activeIndex;
          const fadeFactor = Math.max(
            1 - Math.abs(activeIndex - index) * 0.2,
            0.2,
          );

          return (
            <motion.div
              key={index}
              className={`py-4 px-8 text-center border-b border-gray-300 cursor-pointer text-black ${
                isActive ? "font-bold" : ""
              }`}
              style={{
                opacity: fadeFactor,
                transform: `scale(${isActive ? 1.1 : 1})`,
              }}
              onClick={() => handleOptionClick(index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: fadeFactor }}
              transition={{ duration: 0.3 }}
            >
              {option}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OptionList;
