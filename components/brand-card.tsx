"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BrandCardProps {
  brand: string;
  logo: string;
  points: number;
  description?: string;
  expiry?: string;
}

const BrandCard: React.FC<BrandCardProps> = ({
  brand,
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
      className="relative w-full h-48 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
      onClick={toggleFlip}
    >
      <CardContent className="p-4 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <img src={logo} alt={brand} className="w-16 h-16 object-contain" />
          <span className="text-xl font-bold">{points} Points</span>
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">{brand}</h3>
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
          {expiry && (
            <p className="text-xs text-gray-400 mt-1">Expiry: {expiry}</p>
          )}
        </div>
        <div className="flex justify-between mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-100">
          <Button variant="outline" size="sm">
            REDEEM
          </Button>
          <Button variant="outline" size="sm">
            CONVERT
          </Button>
        </div>
      </CardContent>
      <div className="absolute inset-0 bg-white p-4 flex flex-col justify-center items-center transform md:group-hover:rotate-y-180 backface-hidden transition-all duration-300 md:opacity-0 md:group-hover:opacity-100">
        <h3 className="text-lg font-semibold mb-2">{brand}</h3>
        <p className="text-sm text-center mb-4">{description}</p>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            REDEEM
          </Button>
          <Button variant="outline" size="sm">
            CONVERT
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BrandCard;
