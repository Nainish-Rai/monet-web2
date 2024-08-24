import Footer from "@/components/footer";
import Hero from "@/components/landing-page/hero";
import JoinUs from "@/components/landing-page/join-us";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />

      <JoinUs />
      <Footer />
    </main>
  );
}
