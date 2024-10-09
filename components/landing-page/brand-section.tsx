import React from "react";

type Props = {};

function BrandsSection({}: Props) {
  return (
    <div className="w-full h-screen mt-48 flex-col items-center mx-auto max-w-7xl">
      <h2 className="text-sm   text-center font-medium  tracking-widest leading-none text-yellow-300 uppercase">
        Brands We Work With
      </h2>
      <h3 className=" mt-2 text-center text-5xl font-medium text-white leading-[65px]  ">
        Building Loyalty with Leading Brands
      </h3>
    </div>
  );
}

export default BrandsSection;
