"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

interface BrandCardProps {
  brandName: string;
  brandColor: string;
  logo: string;
  points: number;
  description?: string;
  expiry?: string;
}

const ConvertCard: React.FC<BrandCardProps> = ({
  brandName,
  brandColor,
  logo,
  points,
  description,
  expiry,
}) => {
  return (
    <div className="relative w-full h-48 perspective-1000">
      <div className="w-full h-full preserve-3d  cursor-pointer">
        <Card className="absolute w-full h-full backface-hidden bg-foreground rounded-lg overflow-hidden">
          <CardContent className="h-full p-0">
            <div className="flex h-full">
              <div className="bg-gray-200 hover:bg-gray-100 duration-200 w-2/3 flex justify-center items-center">
                <div>
                  <Image src={logo} alt={brandName} width={100} height={100} />
                  <p className="text-muted mt-4 text-sm">
                    Click to view details
                  </p>
                </div>
              </div>
              <div className="text-muted flex flex-col justify-center items-center w-1/3">
                <span className="font-bold">{points}</span>
                <span className="text-muted">Points</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConvertCard;
