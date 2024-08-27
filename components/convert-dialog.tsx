"use client";
import Image from "next/image";
import ConvertCard from "./convert-card";
import { Input } from "./ui/input";
import SelectCard from "./select-card";
import { useEffect, useState } from "react";
import MotionNumber from "motion-number";
interface BrandCardProps {
  brandName: string;
  brandColor: string;
  logo: string;
  points: number;
  description?: string;
  expiry?: string;
}

const conversionRates: { [key: string]: number } = {
  Starbucks: 0.5,
  Amazon: 1,
  "Coca Cola": 0.091994,
  Heineken: 0.25,
  Levis: 0.7,
  Mastercard: 1,
  McDonalds: 1,
  Redbull: 1,
};

export function ConvertDialog({ data }: { data: BrandCardProps }) {
  const [inputPoints, setInputPoints] = useState<number>(1);
  const [fromPointType, setFromPointType] = useState<string>(data.brandName);
  const [toPointType, setToPointType] = useState<string>("Amazon");
  const [conversionResult, setConversionResult] = useState<any>(null);

  function handleConversion() {
    const fromRate = conversionRates[fromPointType];
    const toRate = conversionRates[toPointType];
    const result = (inputPoints * fromRate) / toRate;
    // set converstion result to object

    setConversionResult({
      input: inputPoints,
      from: fromPointType,
      to: toPointType,
      result,
    });
  }
  useEffect(() => {
    handleConversion();
  }, [inputPoints, fromPointType, toPointType]);
  return (
    <div className="">
      <div>
        <h1 className="text-2xl font-medium">Convert Points Easily</h1>
        <p className="text-sm opacity-80">
          Exchange your loyalty points from Brand A to Brand B effortlessly.
        </p>
      </div>
      <div className="flex w-[900px] p-4 mt-8 ">
        <div className="w-full ">
          <ConvertCard {...data} />
          <div>
            <p className=" opacity-80 text-sm mt-6">Points to be converted</p>
            <Input
              type="number"
              value={inputPoints}
              onChange={(e) => setInputPoints(parseFloat(e.target.value))}
              placeholder="Enter points"
              className="mt-2 text-sm"
            />
          </div>
        </div>
        <div className="w-1/3 mx-4 flex items-start mt-[10%] justify-center ">
          <Image
            src="/images/convert-icon.svg"
            alt="gallery"
            width={25}
            height={25}
          />
        </div>
        <div className="w-full">
          <SelectCard setToPointType={setToPointType} />
          <div>
            <p className="transition duration-200 opacity-80 text-sm mt-6">
              Points to be converted
            </p>
            {conversionResult && (
              <div className="mt-4 flex  font-medium text-gray-100">
                <div className="w-8 mr-2">
                  <MotionNumber
                    value={conversionResult.input}
                    format={{ notation: "compact" }}
                    locales="en-US"
                  />{" "}
                </div>
                {conversionResult.from} pts ={"   "}
                <div className="w-8 mx-2">
                  <MotionNumber
                    value={conversionResult.result}
                    format={{ notation: "compact" }}
                    locales="en-US"
                  />{" "}
                </div>
                {conversionResult.to} pts
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
