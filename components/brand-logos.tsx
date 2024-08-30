import * as React from "react";
import Image from "next/image";

interface BrandLogoProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ src, alt, onClick }) => {
  return (
    <div
      className={`flex flex-col max-h-36 justify-center px-7 py-5 w-full rounded-2xl border border-stone-300 cursor-pointer hover:bg-gray-100 duration-200 max-md:px-5 max-md:mt-6`}
    >
      <Image
        src={src}
        alt={alt}
        width={155}
        height={155}
        className="object-contain aspect-square w-[155px]"
      />
    </div>
  );
};

export default BrandLogo;
