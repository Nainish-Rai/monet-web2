import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const neueMontreal = localFont({
  src: "./fonts/NeueMontreal.woff",
  variable: "--font-neue-montreal",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Monet Web 2.0",
  description: "Monet Web 2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark ">
      <body
        className={`${neueMontreal.variable} ${manrope.className} bg-black`}
      >
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
