import BrandCard from "@/components/brand-card";
import OptionList from "./option-list";

const RewardDashboard: React.FC = () => {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold ">Your Reward Dashboard</h1>
      <p className="text-xl mb-6 text-yellow-400">200 pts</p>
      <div className="grid grid-cols-1 sm:grid-cols-2  mt-8 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {brands.map((brand, index) => (
          <BrandCard key={index} {...brand} />
        ))}
      </div>
    </div>
  );
};

export default RewardDashboard;
