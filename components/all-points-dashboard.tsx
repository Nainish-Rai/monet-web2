"use client";
import React from "react";
import PortfolioCard from "./portfolio-card";
import { FeaturedItemBar } from "./featured-item-bar";
import { Button } from "./ui/button";
import FilterBar from "./filter-bar";
import { LoyaltyCardGrid } from "./loyalty-cards-grid";
import Link from "next/link";

type Props = {};

function AllPointsDashboard({}: Props) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full gap-8 flex">
        <PortfolioCard />
        <div className="w-full flex flex-col gap-4">
          <FeaturedItemBar
            title="Most Points"
            imageSrc="/images/hm-logo.png"
            companyName="H&M"
            points={152}
            pointsGained={0}
          />
          <FeaturedItemBar
            title="Top Earned"
            imageSrc="/images/hm-logo.png"
            companyName="H&M"
            points={152}
            pointsGained={0}
          />
          <FeaturedItemBar
            title="Most Unused"
            imageSrc="/images/hm-logo.png"
            companyName="H&M"
            points={152}
            pointsGained={0}
          />
        </div>
      </div>
      <div className="mt-16 flex w-full justify-between">
        <p className="text-gray-200 font-medium text-xl leading-relaxed max-w-lg ">
          Seamlessly Convert and Redeem Loyalty Points Across Your Favorite
          Brands.
        </p>
        <div className="flex h-full justify-between gap-6">
          <Button
            variant={"outline"}
            className="rounded-full bg-transparent text-base w-64 p-7 border-white/50 px-12"
          >
            Redeem
          </Button>
          <Link href="/dashboard/exchange" className="w-64">
            <Button className="rounded-full w-full bg-gradient-to-r text-base p-7 px-12 from-[#FFFBE6] to-[#FFE55C]">
              Exchange
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-16 w-full">
        <FilterBar />
        <LoyaltyCardGrid />
      </div>
    </div>
  );
}

export default AllPointsDashboard;
