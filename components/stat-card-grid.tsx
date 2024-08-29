import * as React from "react";
import { StatCard } from "./stat-card";

const statCardData = [
  {
    title: "Most Points",
    percentage: "+1.15 %",
    companyName: "Heineken",
    points: 1241,
    backgroundGradient:
      "bg-gradient-to-tl from-stone-900/5 via-stone-900/5 to-violet-900/50",
    imageSrc: "/images/heineken-logo.svg",
  },
  {
    title: "Top Earned",
    percentage: "+21.47 %",
    companyName: "Starbucks",
    points: 559,
    backgroundGradient:
      "bg-gradient-to-tr from-stone-900/5 via-stone-900/5 to-green-600/50",
    imageSrc: "/images/starbucks-logo.svg",
    titleColor: "text-green-600",
  },
  {
    title: "Most Unused",
    percentage: "",
    companyName: "H&M",
    points: 152,
    backgroundGradient:
      "bg-gradient-to-br from-stone-900/5 via-stone-900/5 to-red-600/50",
    imageSrc: "/images/hm-logo.png",
    titleColor: "text-red-400 text-opacity-60",
  },
];

export function StatCardGrid() {
  return (
    <main className="flex flex-wrap gap-6 mt-6 max-w-7xl items-center">
      {statCardData.map((card, index) => (
        <StatCard key={index} {...card} />
      ))}
    </main>
  );
}
