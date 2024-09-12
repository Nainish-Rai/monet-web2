"use client";

import { useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpDownIcon,
  ChevronDownIcon,
  GiftIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { PointsExchangeCard } from "./point-exchange-card";

export default function Component() {
  const [activeTab, setActiveTab] = useState("exchange");

  return (
    <div className="w-full max-w-lg mx-auto p-2 bg-gradient-to-b from-[#D6AF503D]/5 to-transparent rounded-2xl">
      <div className="w-full max-w-lg mx-auto p-2 bg-gradient-to-b from-[#D6AF503D]/10 to-transparent rounded-2xl">
        <Card className="w-full max-w-lg mx-auto bg-gradient-to-b from-[#D6AF503D]/20 backdrop-blur-sm text-gray-200 rounded-2xl overflow-hidden">
          <CardContent className="p-4">
            <div className="flex mb-4 bg-stone-950 bg-opacity-40 rounded-2xl p-1">
              <Button
                variant="ghost"
                className={`flex-1 rounded-xl ${
                  activeTab === "exchange"
                    ? "bg-stone-950 bg-opacity-40 text-white"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("exchange")}
              >
                Exchange
              </Button>
              <Button
                variant="ghost"
                className={`flex-1 rounded-xl ${
                  activeTab === "redeem"
                    ? "bg-stone-950 bg-opacity-40 text-white"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("redeem")}
              >
                Redeem
              </Button>
            </div>

            {activeTab === "exchange" ? (
              <div className="space-y-4">
                <PointsExchangeCard
                  points={152}
                  title="You Send"
                  brandName="McDonalds"
                  logoSrc="/images/mcdonalds-logo.svg"
                  availableBalance={2}
                />

                <div className="flex justify-center">
                  <div className="bg-gray-900/20 border p-2 rounded-full">
                    <ArrowUpDownIcon className="w-6 h-6" />
                  </div>
                </div>

                <PointsExchangeCard
                  points={152}
                  title="You Get"
                  brandName="McDonalds"
                  logoSrc="/images/mcdonalds-logo.svg"
                  availableBalance={2}
                />

                <p className="text-center text-sm text-gray-400 mt-4">
                  Conversion fee : 0.5 Points
                </p>

                <Button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-6 rounded-full">
                  Exchange
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-[#2a2a2a] p-4 rounded-2xl">
                  <p className="text-sm text-gray-400 mb-2">Select reward</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <GiftIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Gift Card</p>
                        <p className="text-xs text-gray-400">
                          Various brands available
                        </p>
                      </div>
                      <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value="50"
                      className="bg-transparent text-right text-2xl font-bold w-20 focus:outline-none"
                      readOnly
                    />
                  </div>
                </div>

                <div className="bg-[#2a2a2a] p-4 rounded-2xl">
                  <p className="text-sm text-gray-400 mb-2">Your points</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">P</span>
                      </div>
                      <div>
                        <p className="font-semibold">Total Points</p>
                        <p className="text-xs text-gray-400">
                          Across all accounts
                        </p>
                      </div>
                    </div>
                    <p className="text-2xl font-bold">75</p>
                  </div>
                </div>

                <p className="text-center text-sm text-gray-400 mt-4">
                  Redemption fee : 2 Points
                </p>

                <Button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-6 rounded-full">
                  Redeem
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
