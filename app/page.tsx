import Hero from "@/components/landing-page/hero";
import JoinUs from "@/components/landing-page/join-us";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <JoinUs />
    </main>
  );
}
