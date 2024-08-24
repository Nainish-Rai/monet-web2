"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface BrandCardProps {
  brandName: string;
  brandColor: string;
  logo: string;
  points: number;
  description?: string;
  expiry?: string;
}

const BrandCard: React.FC<BrandCardProps> = ({
  brandName,
  brandColor,
  logo,
  points,
  description,
  expiry,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card
      className="relative w-full h-48 transition-all duration-300 transform hover:scale-105 cursor-pointer group rounded-lg overflow-hidden bg-foreground cursor-pointer"
      onClick={toggleFlip}
    >
      <CardContent className="h-full p-0">
        <div className="flex h-full">
          <div className="bg-gray-200 w-2/3 flex justify-center items-center">
            <div>
              <Image src={logo} alt={brandName} width={100} height={100} />
              <p className="text-muted mt-4 text-sm">View Details</p>
            </div>
          </div>
          <div className="text-muted flex flex-col justify-center items-center w-1/3">
            <span className="font-bold">{points}</span>
            <span className="text-muted-foreground">Points</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BrandCard;
