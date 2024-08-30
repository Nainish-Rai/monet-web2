import Image from "next/image";
import React from "react";

interface ConversionCardProps {
  imageUrl: string;
  percentage: string;
  description: string;
}

const RecommendationCard: React.FC<ConversionCardProps> = ({
  imageUrl,
  percentage,
  description,
}) => {
  return (
    <div className="w-full lg:w-1/4 p-2">
      <article className="flex overflow-hidden flex-col w-full   leading-8 rounded-xl bg-stone-900 max-w-[332px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] text-neutral-400">
        <div className="w-full object-cover bg-white aspect-[3.05]">
          <Image
            src={imageUrl}
            alt="Conversion illustration"
            width={332}
            height={109}
            className="object-contain w-full aspect-[3.05]"
          />
        </div>
        <div className="overflow-hidden text-lg gap-2.5 self-stretch p-6  w-full">
          <span className="text-xl text-zinc-100">{percentage}</span>
          <br />
          {description}
        </div>
      </article>
    </div>
  );
};

export default RecommendationCard;
