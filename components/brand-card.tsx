"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ConvertDialog } from "./convert-dialog";

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

  const toggleFlip = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-full h-48 perspective-1000">
      <motion.div
        className="w-full h-full preserve-3d  cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.2, delay: 0, ease: "easeInOut" }}
      >
        <Card
          onClick={toggleFlip}
          className="absolute w-full h-full backface-hidden bg-foreground rounded-lg overflow-hidden"
        >
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

        <Card
          onClick={(e) => toggleFlip(e)}
          className="absolute w-full h-full backface-hidden rotate-y-180 bg-yellow-400 text-background"
        >
          <CardContent className="h-full p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">{brandName}</h3>
              <p className="text-sm mb-2">{description}</p>
              {expiry && (
                <p className="text-sm">
                  <strong>Expiry:</strong> {expiry}
                </p>
              )}
            </div>

            <div className="flex gap-4">
              <Button variant={"default"}>Redeem</Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={"secondary"}>Convert</Button>
                </DialogTrigger>

                <DialogContent className="bg-background/70 sm:rounded-3xl  backdrop-blur w-screen max-w-fit">
                  <ConvertDialog
                    data={{
                      brandName,
                      brandColor,
                      logo,
                      points,
                      description,
                      expiry,
                    }}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default BrandCard;
