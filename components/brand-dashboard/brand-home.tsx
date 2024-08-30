import React from "react";
import { BarChart3, Brain, ChevronRight, Coins } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import BrandCashback from "./brand-cashback";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  action,
}) => (
  <div className="bg-zinc-800 rounded-lg p-6 flex flex-col items-start">
    <div className="text-yellow-400 mb-4">{icon}</div>
    <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
    <div className="flex justify-between items-end">
      <p className="text-gray-400">{description}</p>

      {action && action}
    </div>
  </div>
);

const WorldMapBackground: React.FC = () => (
  <div className="absolute -top-36 right-0 w-1/2 h-full opacity-20">
    <Image
      src="/join-us.svg"
      layout="fill"
      className="object-contain invert"
      alt="world map"
    />
  </div>
);

export default function BrandHome() {
  const [isCashbackDialogOpen, setIsCashbackDialogOpen] = React.useState(false);
  const features: FeatureCardProps[] = [
    {
      icon: <BarChart3 size={32} />,
      title: "Analytics",
      description:
        "Be part of an exclusive unveiling of our groundbreaking loyalty rewards platform.",
      action: (
        <Link href="/brand/dashboard/analytics" passHref>
          <Button variant={"secondary"}>
            <ChevronRight size={16} />
          </Button>
        </Link>
      ),
    },
    {
      icon: <Brain size={32} />,
      title: "AI Recommendations",
      description:
        "Be part of an exclusive unveiling of our groundbreaking loyalty rewards platform.",
      action: (
        <Link href="/brand/dashboard/overview" passHref>
          <Button variant={"secondary"}>
            <ChevronRight size={16} />
          </Button>
        </Link>
      ),
    },
    {
      icon: <Coins size={32} />,
      title: "Cashbacks",
      description:
        "Be part of an exclusive unveiling of our groundbreaking loyalty rewards platform.",
      action: <BrandCashback isOpen={isCashbackDialogOpen} />,
    },
  ];

  return (
    <div className="text-white min-h-screen py-8 relative overflow-hidden">
      <WorldMapBackground />
      <div className="mx-auto relative z-10">
        <h1 className="text-5xl font-semibold text-yellow-400 mb-4">
          Welcome, H&M
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl font-light">
          We are excited to have you on board! Here are some of the features
          that you can explore.
        </p>
        <Link href="/brand/dashboard/overview" passHref>
          <Button variant={"secondary"}>Continue</Button>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
