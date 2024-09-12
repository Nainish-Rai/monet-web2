import { LoyaltyCard } from "./loyalty-card";

interface LoyaltyCardData {
  logoSrc: string;
  brandName: string;
  validUntil: string;
  points: number;
}

const loyaltyCards: LoyaltyCardData[] = [
  {
    logoSrc: "/images/mcdonalds-logo.svg",
    brandName: "Mcdonalds",
    validUntil: "27/08/24",
    points: 1242,
  },
  {
    logoSrc: "/images/starbucks-logo.svg",
    brandName: "Starbucks",
    validUntil: "30/09/24",
    points: 559,
  },
  {
    logoSrc: "/images/hm-logo.png",
    brandName: "H&M",
    validUntil: "30/10/24",
    points: 152,
  },
  {
    logoSrc: "/images/mcdonalds-logo.svg",
    brandName: "Mcdonalds",
    validUntil: "27/08/24",
    points: 1242,
  },
  {
    logoSrc: "/images/starbucks-logo.svg",
    brandName: "Starbucks",
    validUntil: "30/09/24",
    points: 559,
  },
  {
    logoSrc: "/images/hm-logo.png",
    brandName: "H&M",
    validUntil: "30/10/24",
    points: 152,
  },
  {
    logoSrc: "/images/mcdonalds-logo.svg",
    brandName: "Mcdonalds",
    validUntil: "27/08/24",
    points: 1242,
  },
  {
    logoSrc: "/images/starbucks-logo.svg",
    brandName: "Starbucks",
    validUntil: "30/09/24",
    points: 559,
  },
  {
    logoSrc: "/images/hm-logo.png",
    brandName: "H&M",
    validUntil: "30/10/24",
    points: 152,
  },
];

export function LoyaltyCardGrid() {
  return (
    <section className="flex flex-wrap mt-8  items-center">
      {loyaltyCards.map((card, index) => (
        <LoyaltyCard key={index} {...card} />
      ))}
    </section>
  );
}
