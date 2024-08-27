"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { ConvertDialog } from "./convert-dialog";
import { Button } from "./ui/button";
import SelectBrandDialog from "./select-brand-dialog";

interface BrandCardProps {
  brandName: string;
  brandColor: string;
  logo: string;
  points: number;
  description?: string;
  expiry?: string;
}

const SelectCard = ({ setToPointType }: { setToPointType: Function }) => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<BrandCardProps | null>(null);

  useEffect(() => {
    if (selectedCard != null) {
      setToPointType(selectedCard.brandName);
    }
  }, [selectedCard, setToPointType]);

  return (
    <div className="relative w-full h-48 hover:opacity-60 duration-200 hover:-translate-y-1 perspective-1000">
      <div className="w-full h-full preserve-3d  border-none cursor-pointer">
        {selectedCard == null ? (
          <Card className="absolute w-full h-full  bg-foreground rounded-lg overflow-hidden">
            <CardContent className="h-full p-0">
              <div className="flex h-full">
                <div className="bg-neutral-900 hover:bg-netural-800 duration-200 w-full flex justify-center items-center">
                  <div>
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <p className="text-gray-200 border-2 border-neutral-700 p-3 rounded-md mt-4 text-sm">
                          Click to view details
                        </p>
                      </DialogTrigger>
                      <DialogContent className="bg-white  p-2 max-w-screen-2xl w-[900px] sm:rounded-3xl overflow-hidden ">
                        <SelectBrandDialog
                          setSelectedCard={setSelectedCard}
                          open={open}
                          setOpen={setOpen}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="relative  w-full h-48  perspective-1000">
            <div className="w-full h-full preserve-3d   cursor-pointer">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Card className="absolute w-full h-full backface-hidden bg-foreground rounded-lg overflow-hidden">
                    <CardContent className="h-full p-0">
                      <div className="flex h-full">
                        <div className="bg-gray-200 hover:bg-gray-100 duration-200 w-2/3 flex justify-center items-center">
                          <div>
                            <Image
                              src={selectedCard.logo}
                              alt={selectedCard.brandName}
                              width={100}
                              height={100}
                            />

                            <p className="text-muted mt-4 text-sm">
                              Click to view details
                            </p>
                          </div>
                        </div>
                        <div className="text-muted flex flex-col justify-center items-center w-1/3">
                          <span className="font-bold">
                            {selectedCard.points}
                          </span>
                          <span className="text-muted">Points</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-white  p-2 max-w-screen-2xl w-[900px] sm:rounded-3xl overflow-hidden ">
                  <SelectBrandDialog
                    setSelectedCard={setSelectedCard}
                    open={open}
                    setOpen={setOpen}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectCard;
