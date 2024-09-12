import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface LoyaltyCardProps {
  logoSrc: string;
  brandName: string;
  validUntil: string;
  points: number;
}

export function LoyaltyCard({
  logoSrc,
  brandName,
  validUntil,
  points,
}: LoyaltyCardProps) {
  return (
    <div className="w-full lg:w-1/3 p-3 ">
      <Card className="flex overflow-hidden flex-col flex-1 shrink justify-center self-stretch p-10 my-auto rounded-3xl basis-0 bg-zinc-900 w-full min-w-[240px] sm:px-5">
        <CardContent className="flex gap-10 justify-between items-center w-full p-0">
          <div className="flex gap-3 items-center self-stretch my-auto font-medium">
            <Image
              src={logoSrc}
              alt={`${brandName} logo`}
              width={40}
              height={40}
              className="object-contain bg-white  shrink-0 self-stretch my-auto rounded-full"
            />
            <div className="flex flex-col justify-center self-stretch my-auto">
              <h3 className="text-xl text-white">{brandName}</h3>
              <p className="mt-3 text-xs text-white text-opacity-60">
                Valid till {validUntil}
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center self-stretch my-auto font-bold whitespace-nowrap">
            <div className="flex gap-3 items-end self-stretch my-auto">
              <div className="flex gap-2 items-center">
                <span className="flex flex-col self-stretch my-auto w-5 text-xs">
                  <span className="flex flex-col w-8  justify-center p-1 rounded-full">
                    <Image
                      src="/images/point.png"
                      alt="coin"
                      width={64}
                      height={64}
                      className="w-5 mr-2 h-5"
                    />
                  </span>
                </span>
                <span className="self-stretch my-auto text-3xl text-white">
                  {points.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
