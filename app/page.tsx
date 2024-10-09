import Footer from "@/components/footer";
import BrandsSection from "@/components/landing-page/brand-section";
import Hero from "@/components/landing-page/hero";
import JoinUs from "@/components/landing-page/join-us";
import { LoyaltyManagement } from "@/components/landing-page/loyalty-management";
import { UnlockValueSection } from "@/components/landing-page/unlock-value-section";
import { WaitlistSection } from "@/components/landing-page/waitlist-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <LoyaltyManagement />
      <UnlockValueSection />
      <BrandsSection />
      <WaitlistSection />
    </main>
  );
}
