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
      name: "Learn",
      link: "/learn",
      icon: <House className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Tokenomics",
      link: "/tokenomics",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Community",
      link: "/community",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Products",
      newTab: true,
      link: "https://web3-points.stage.monet.work/",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
      isDropdown: true,
      subMenu: [
        {
          name: "Web3 Points (Beta)",
          url: "https://web3-points.stage.monet.work/",
        },
      ],
    },
    {
      name: "About",
      newTab: true,
      link: "https://monet-work.github.io/web3-points/",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
      isDropdown: true,
      subMenu: [
        {
          name: "Web3 Points",
          url: "https://monet-work.github.io/web3-points/",
        },
      ],
    },
  ];
  return (
    <nav className="w-full mx-auto py-4">
      <div className="flex items-center justify-between mx-auto container px-4">
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
            className="w-full absolute top-12 h-fit p-8 bg-black/90 rounded  backdrop-blur-md   left-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full flex flex-col gap-4"
            >
              <ul className="w-full flex flex-col text-xl  gap-4 items-center">
                {navItems.map((navItem: any, idx: number) => (
                  <li
                    key={`link=${navItem}`}
                    onClick={() => {
                      setMenuActive(false);
                    }}
                    className=" cursor-pointer hover:text-red-400 themegrad  text-"
                  >
                    <Link href={navItem.link}>{navItem.name}</Link>
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
