import Image from "next/image";
import ConvertCard from "./convert-card";
import { Input } from "./ui/input";
import SelectCard from "./select-card";
interface BrandCardProps {
  brandName: string;
  brandColor: string;
  logo: string;
  points: number;
  description?: string;
  expiry?: string;
}

export function ConvertDialog({ data }: { data: BrandCardProps }) {
  return (
    <div className="">
      <div>
        <h1 className="text-2xl font-medium">Convert Points Easily</h1>
        <p className="text-sm opacity-80">
          Exchange your loyalty points from Brand A to Brand B effortlessly.
        </p>
      </div>
      <div className="flex w-[800px] p-4 mt-8 ">
        <div className="w-full ">
          <ConvertCard {...data} />
          <div>
            <p className=" opacity-80 text-sm mt-6">Points to be converted</p>
            <Input
              type="number"
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
          <SelectCard {...data} />
          <div>
            <p className=" opacity-80 text-sm mt-6">Points to be converted</p>
            <Input
              type="number"
              placeholder="Enter points"
              className="mt-2 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
