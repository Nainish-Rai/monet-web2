import BrandCard from "@/components/brand-card";
import OptionList from "./option-list";
import PortfolioBar from "./portfolio-bar";
import { StatCardGrid } from "./stat-card-grid";
import { StarsIcon } from "lucide-react";
import DashboardCard from "./dashboard-card";

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
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PortfolioBar />
      <StatCardGrid />
      <div className="flex gap-2 mt-8 items-center">
        <h1 className="text-2xl font-semibold text-gray-300 ">
          {" "}
          Recommendations for you
        </h1>
        <StarsIcon className="text-yellow-400" />
      </div>

      <div className="grid grid-cols-1 max-w-7xl sm:grid-cols-2  mt-8 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {brands.map((brand, index) => (
          <DashboardCard
            key={index}
            imageUrl="/images/recommendation.png"
            brandLogo="/images/starbucks-logo.svg"
            discount="Flat 40% off"
            expiryDate="27th Aug 2024"
          />
        ))}
      </div>
    </div>
  );
};

export default RewardDashboard;
