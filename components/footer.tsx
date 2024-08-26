import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-4 items-center mb-4 sm:mb-0">
          <Link
            href="/terms"
            className="text-sm hover:text-white transition-colors"
          >
            Terms & Conditions
          </Link>
          <div>|</div>
          <Link
            href="/privacy"
            className="text-sm hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} Monet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
