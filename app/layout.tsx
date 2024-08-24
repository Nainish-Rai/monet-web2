import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const syne = Syne({ subsets: ["latin"] });

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
      <body className={syne.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
