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

const SelectCard: React.FC<BrandCardProps> = ({
  brandName,
  brandColor,
  logo,
  points,
  description,
  expiry,
}) => {
  return (
    <div className="relative w-full h-48 perspective-1000">
      <div className="w-full h-full preserve-3d  border-none cursor-pointer">
        <Card className="absolute w-full h-full  bg-foreground rounded-lg overflow-hidden">
          <CardContent className="h-full p-0">
            <div className="flex h-full">
              <div className="bg-neutral-900 hover:bg-netural-800 duration-200 w-full flex justify-center items-center">
                <div>
                  <p className="text-gray-200 border-2 border-neutral-700 p-3 rounded-md mt-4 text-sm">
                    Click to view details
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SelectCard;
