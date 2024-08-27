import * as React from "react";

interface BrandCategoryProps {
  categories: string[];
}

const BrandCategory: React.FC<BrandCategoryProps> = ({ categories }) => {
  return (
    <nav className="flex flex-col grow px-7 pt-32 pb-48 w-full text-2xl font-semibold rounded-2xl bg-neutral-100 text-stone-300 max-md:px-5 max-md:py-24 max-md:mt-7">
      <ul className="flex flex-col">
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <li className={index === 2 ? "text-black" : "text-neutral-500"}>
              {category}
            </li>
            {index < categories.length - 1 && (
              <div className="mt-4 w-full border border-solid border-neutral-500 min-h-[1px]" />
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default BrandCategory;
