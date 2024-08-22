import Image from "next/image";
import React from "react";
import { MonetWorkLogo } from "./monet-work-logo";
import { NavigationMenuLinks } from "./nav-links";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="w-full mx-auto py-4 ">
      <div className="flex items-center justify-between mx-auto max-w-7xl ">
        <div>
          <MonetWorkLogo className="w-28" />
        </div>
        <div>
          <NavigationMenuLinks />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
