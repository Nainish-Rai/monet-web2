import React from "react";
import { LoyaltyFeature, LoyaltyFeatureProps } from "./loyalty-feature";
import Image from "next/image";

interface LoyaltyManagementProps {
  features: LoyaltyFeatureProps[];
}

export function LoyaltyManagement() {
  const features = [
    {
      iconSrc: "/images/landing/l1.svg",
      title: "Discover",
      description:
        "Sign up with your email address & mobile number to find your loyalty points linked with your favourite brands",
    },
    {
      iconSrc: "/images/landing/l2.svg",
      title: "Swap",
      description:
        "Instantly convert points across your favourite brands with the best conversion rates.",
    },
    {
      iconSrc: "/images/landing/l3.svg",
      title: "Redeem",
      description:
        "Use your brand new points to shop at your favourite stores. Online or in-store, get the best value on purchases!",
    },
  ];
  return (
    <section className="flex w-full gap-32 items-center mt-48  max-md:flex-col">
      <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow   pt-5 rounded-r-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <Image
            width={516}
            height={516}
            loading="lazy"
            src="/images/landing/loyalty.svg"
            alt="Loyalty management illustration"
            className=" w-full   max-h-[80%] "
          />
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-3 max-md:mt-10 max-md:max-w-full">
          <h2 className="self-start text-sm font-medium tracking-widest leading-none text-yellow-300 uppercase">
            How it works
          </h2>
          <div className="flex flex-col mt-2 w-full max-md:max-w-full">
            <h3 className="flex-1 shrink gap-5 w-full text-5xl font-medium text-white leading-[65px] lg:max-w-md max-md:text-4xl max-md:leading-[60px]">
              Manage Loyalty Effortlessly
            </h3>
            <div className="flex flex-col  w-full max-w-[516px] max-md:max-w-full">
              {features.map((feature, index) => (
                <LoyaltyFeature key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
