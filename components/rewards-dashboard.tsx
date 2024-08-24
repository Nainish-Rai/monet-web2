import BrandCard from "@/components/brand-card";

const RewardDashboard: React.FC = () => {
  const brands = [
    {
      brand: "H&M",
      logo: "/hm-logo.png",
      points: 25,
      description:
        "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      expiry: "02/02/2060",
    },
    { brand: "cult.fit", logo: "/cultfit-logo.png", points: 25 },
    { brand: "WESTSIDE", logo: "/westside-logo.png", points: 25 },
    { brand: "Lenskart", logo: "/lenskart-logo.png", points: 25 },
    { brand: "Uber", logo: "/uber-logo.png", points: 25 },
    { brand: "Ola Airdrop Vault", logo: "/ola-logo.png", points: 25 },
    { brand: "Starbucks", logo: "/starbucks-logo.png", points: 25 },
    { brand: "ARABICA", logo: "/arabica-logo.png", points: 25 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Reward Dashboard</h1>
      <p className="text-xl mb-6">200 pts</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {brands.map((brand, index) => (
          <BrandCard key={index} {...brand} />
        ))}
      </div>
    </div>
  );
};

export default RewardDashboard;
