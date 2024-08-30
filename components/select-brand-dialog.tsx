"use client";
import * as React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import BrandCategory from "./brand-category";
import BrandLogo from "./brand-logos";
import { X } from "lucide-react";
import OptionList from "./option-list";
import { Close } from "@radix-ui/react-dialog";
import { Dialog, DialogClose } from "./ui/dialog";

interface BrandCardProps {
  brandName: string;
  brandColor: string;
  logo: string;
  points: number;
  description?: string;
  expiry?: string;
}
interface BrandSelectionProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setSelectedCard: (selectedCard: BrandCardProps | null) => void;
}

const BrandSelectionDialog: React.FC<BrandSelectionProps> = ({
  open,
  setSelectedCard,
  setOpen,
}) => {
  const categories = [
    "Apparel",
    "Experiences & Travel",
    "Lifestyle",
    "Electronics",
    "Food & Drink",
  ];

  const brands = [
    {
      brandName: "Starbucks",
      brandColor: "bg-red-500",
      logo: "/images/starbucks-logo.svg",
      points: 100,
      description: "Get 20% off on all products",
      expiry: "31 Dec 2021",
    },
    {
      brandName: "Amazon",
      brandColor: "bg-blue-500",
      logo: "/images/amazon-logo.svg",
      points: 50,
      description: "Get 10% off on all products",
      expiry: "31 Dec 2021",
    },
    {
      brandName: "Coca Cola",
      brandColor: "bg-yellow-500",
      logo: "/images/coca-cola-logo.svg",
      points: 25,
      description: "Get 5% off on all products",
      expiry: "31 Dec 2021",
    },
    {
      brandName: "Heineken",
      brandColor: "bg-green-500",
      logo: "/images/heineken-logo.svg",
      points: 10,
      description: "Get 2% off on all products",
      expiry: "31 Dec 2021",
    },
    {
      brandName: "Levis",
      brandColor: "bg-blue-500",
      logo: "/images/levis-logo.svg",
      points: 150,
      description: "Get 30% off on all products",
      expiry: "31 Dec 2021",
    },
    {
      brandName: "Mastercard",
      brandColor: "bg-red-500",
      logo: "/images/mastercard-logo.svg",
      points: 75,
      description: "Get 15% off on all products",
      expiry: "31 Dec 2021",
    },
    {
      brandName: "McDonalds",
      brandColor: "bg-red-500",
      logo: "/images/mcdonalds-logo.svg",
      points: 200,
      description: "Get 40% off on all products",
      expiry: "31 Dec 2021",
    },
    {
      brandName: "Redbull",
      brandColor: "bg-blue-500",
      logo: "/images/redbull-logo.svg",
      points: 5,
      description: "Get 1% off on all products",
      expiry: "31 Dec 2021",
    },
  ];

  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredBrandLogos = brands.filter((brand) =>
    brand.brandName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const [selectedBrand, setSelectedBrand] =
    React.useState<BrandCardProps | null>(null);

  React.useEffect(() => {
    setSelectedBrand(null);
  }, [searchQuery]);

  React.useEffect(() => {
    if (selectedBrand) {
      // close the shadcn dialog component using js
      setSelectedCard(selectedBrand);
      setOpen(false);
    }
  }, [selectedBrand, setOpen]);

  return (
    <section className="flex  flex-col w-full  p-8 bg-white">
      <header className="flex flex-wrap gap-5 items-center justify-between  w-full text-3xl font-bold text-black max-w-[1032px] max-md:max-w-full">
        <h1>Select Brand</h1>

        <DialogClose className="self-end">
          <X size={24} />
        </DialogClose>
      </header>
      <main className="mt-9 ">
        <div className="flex gap-5 flex-col lg:flex-row">
          <aside className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            {/* <BrandCategory categories={categories} /> */}
            <OptionList options={categories} />
          </aside>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-7 max-md:max-w-full">
              <div className="flex flex-wrap gap-4 max-md:max-w-full">
                <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <Input
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-6 py-4 text-base whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-400 text-stone-500 max-md:px-5 max-md:max-w-full"
                  />
                  <div className="mt-6 max-md:max-w-full">
                    <div className="grid grid-cols-3 h-96 overflow-scroll gap-5 max-md:grid-cols-1">
                      {filteredBrandLogos.map((logo, index) => (
                        <div key={index} onClick={() => setSelectedBrand(logo)}>
                          <BrandLogo src={logo.logo} alt={logo.logo} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BrandSelectionDialog;
