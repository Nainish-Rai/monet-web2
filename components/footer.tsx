import { FacebookIcon, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="w-full bg-[#F7CD46] border lg:text-xs  text-sm font-medium text-black">
      <div className="flex flex-col lg:flex-row justify-between max-w-6xl py-3 mx-auto px-6 lg:px-0 gap-4 lg:gap-0 lg:items-center">
        <ul className="flex gap-2">
          <li>
            <Link
              className="hover:underline hover:opacity-80"
              href="/terms-and-conditions"
            >
              Terms & Conditions
            </Link>
          </li>
          <div>|</div>
          <li>
            <Link
              className="hover:underline hover:opacity-80"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
        <div className="flex gap-2">
          <div className="flex gap-4">
            <Link href="/">
              <FacebookIcon className="h-6 w-6 border-2 rounded p-0.5 " />
            </Link>
            <Link href="/">
              <Twitter className="h-6 w-6 border-2 rounded p-0.5" />
            </Link>
            <Link href="/">
              <Linkedin className="h-6 w-6 border-2 rounded p-0.5" />
            </Link>
          </div>
        </div>
        <div>
          <p>{`© ${new Date().getFullYear()} Monet. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
