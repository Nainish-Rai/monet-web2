"use client";
import Image from "next/image";
import ConvertCard from "./convert-card";
import { Input } from "./ui/input";
import SelectCard from "./select-card";
import { useEffect, useState } from "react";
import MotionNumber from "motion-number";
import { Divide, X } from "lucide-react";
import { Close } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { DialogClose } from "./ui/dialog";
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

  const conversionFeeRate = 0.025; // 2.5% conversion fee rate

  function handleConversion() {
    const fromRate = conversionRates[fromPointType];
    const toRate = conversionRates[toPointType];

    const pointsWithoutConversionFee = (inputPoints * fromRate) / toRate;
    const conversionFee = inputPoints * fromRate * conversionFeeRate;
    const netPointsValue = (inputPoints * fromRate) / toRate - conversionFee;
    const result = netPointsValue;

    setConversionResult({
      input: inputPoints,
      from: fromPointType,
      to: toPointType,
      result,
      netPointsValue,
      conversionFee,
      pointsWithoutConversionFee,
    });
  }
  useEffect(() => {
    handleConversion();
  }, [inputPoints, fromPointType, toPointType]);
  return (
    <div className="">
      <div className="px-4">
        <div>
          <h1 className="text-4xl font-syne  font-medium">
            Convert Points Easily
          </h1>
          <p className="mt-1 opacity-80">
            Exchange your loyalty points from Brand A to Brand B effortlessly.
          </p>
        </div>
      </div>
      <div className="flex w-[800px]  px-4 py-4 mt-4 ">
        <div className="w-full ">
          <ConvertCard {...data} />
          <div>
            <div className="flex flex-col h-full  mt-4 pb-2 max-w-84">
              <p className="font-syne opacity-80 text-xl ">You Redeem</p>
              <Input
                type="number"
                value={inputPoints}
                onChange={(e) => setInputPoints(parseFloat(e.target.value))}
                placeholder="Enter Here"
                min={1}
                className=" text-5xl mt-4 -mb-1  border border-transparent bg-transparent  p-0  text-slate-200 outline-none  focus:ring-0 focus:border-transparent focus:outline-none focus-visible:ring-0 border-none focus-visible:ring-white/0  ring-offset-transparent focus:ring-offset-transparent focus-visible:ring-offset-transparent"
              />
              <p className="font-syne opacity-90  text-lg  mt-3">
                {fromPointType} Points
              </p>

              <div className=" justify-end flex-1 h-full   flex flex-col  mt-20 pt-2   ">
                <p> Conversion Rate</p>
                <p className=" opacity-70  text-sm  ">
                  1 {fromPointType} Pts ={" "}
                  {(
                    conversionRates[fromPointType] /
                    conversionRates[toPointType]
                  ).toFixed(3)}{" "}
                  {toPointType} Pts
                </p>
              </div>
            </div>
            {/* <p> Conversion fee ({conversionFeeRate * 100}%) : </p> */}
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
            {conversionResult && (
              // display conversion result here

              <div>
                <div className="flex flex-col   mt-4 p-1  max-w-72 overflow-hidden  ">
                  <p className="font-syne opacity-80  text-xl ">
                    You Will Recieve
                  </p>
                  {conversionResult.result > 0 ? (
                    <MotionNumber
                      className="text-right text-5xl mt-1  overflow-hidden p-0  text-slate-200 outline-none  focus:ring-0 focus:border-transparent focus:outline-none focus-visible:ring-0 border-none focus-visible:ring-white/0 "
                      value={conversionResult.result}
                      format={{ notation: "standard" }}
                      locales="en-US"
                    />
                  ) : (
                    <MotionNumber
                      className="text-right text-5xl mt-1  p-0  text-slate-200 outline-none  focus:ring-0 focus:border-transparent focus:outline-none focus-visible:ring-0 border-none focus-visible:ring-white/0 "
                      value={"0.00"}
                      format={{ notation: "standard" }}
                      locales="en-US"
                    />
                  )}
                  <p className="font-syne opacity-90  text-lg  -mt-1">
                    {toPointType} Points
                  </p>
                </div>
                <div className="flex justify-between w-full opacity-80 text-sm mt-2 ">
                  <p className="">Points :</p>{" "}
                  <p>
                    {conversionResult.pointsWithoutConversionFee.toFixed(3)}
                  </p>
                </div>
                <div className=" flex justify-between w-full opacity-80 text-sm">
                  <p>
                    Fee{" "}
                    <span className="opacity-80 text-xs">
                      ({conversionFeeRate * 100}%)
                    </span>{" "}
                    :{" "}
                  </p>
                  <p>- {conversionResult.conversionFee.toFixed(3)}</p>
                </div>

                <div className=" flex justify-between w-full opacity-80 text-sm">
                  <p>Net Points : </p>
                  <p> {conversionResult.result.toFixed(3)}</p>
                </div>

                <DialogClose className="w-full">
                  <Button
                    disabled={
                      conversionResult.result <= 0 ||
                      !conversionResult.conversionFee ||
                      !conversionResult.pointsWithoutConversionFee
                    }
                    className="mt-6 rounded-full p-5  bg-white/80 w-full "
                  >
                    Redeem
                  </Button>
                </DialogClose>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
