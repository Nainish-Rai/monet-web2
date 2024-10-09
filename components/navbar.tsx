"use client";
import React, { useState } from "react";
import { MonetWorkLogo } from "./monet-work-logo";
import { NavigationMenuLinks } from "./nav-links";
import { ChevronDownIcon, House, HouseIcon, MenuIcon, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Navbar({}: Props) {
  const [menuActive, setMenuActive] = useState(false);
  const navItems = [
    {
      name: "Who we are",
      link: "#",
      icon: <House className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Features",
      link: "#",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact us",
      link: "#",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <nav className="w-full fixed top-0 py-4">
      <div className="flex items-center justify-between container">
        <Link href={"/"}>
          <MonetWorkLogo className="w-28" />
        </Link>
        <div className="hidden lg:block">
          <NavigationMenuLinks />
        </div>
        {!menuActive ? (
          <ChevronDownIcon
            onClick={() => setMenuActive(true)}
            className="lg:hidden"
          />
        ) : (
          <X onClick={() => setMenuActive(false)} className="lg:hidden" />
        )}
        {menuActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ scale: 1, height: 300 }}
            exit={{ scale: 0 }}
            transition={{
              type: "spring",
              delay: 0,
              duration: 0.5,
            }}
            className="w-full absolute top-12 h-fit p-8 bg-black/40 z-10 rounded  backdrop-blur-md left-0 font-syne"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full flex flex-col gap-4"
            >
              <ul className="w-full flex flex-col text-xl  gap-4 items-center">
                {navItems.map((item, idx: number) => (
                  <li
                    key={`link=${item.name}`}
                    onClick={() => {
                      setMenuActive(false);
                    }}
                    className=" cursor-pointer hover:text-red-400 themegrad  text-"
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
