import React from "react";
import StatCard from "../stats-card";
import { BarChartComponent } from "../bar-chart";
import { PieChartComponent } from "../pie-chart";
import RecommendationCard from "../recommendation-card";

type Props = {};

function BrandOverview({}: Props) {
  const tradeInData = {
    title: "Total Trade-In Points",
    value: "2,354",
    change: "+180.1%",
    changeText: "from last month",
  };
  const tradeOutData = {
    title: "Total Trade-Out Points",
    value: "1234",
    change: "+180.1%",
    changeText: "from last month",
  };
  const totalCashbackData = {
    title: "Total Cashback",
    value: "Rs. 123749",
    change: "+19%%",
    changeText: "from last month",
  };
  return (
    <div className="w-full mt-6">
      <div className="flex w-full flex-col lg:flex-row flex-wrap  ">
        <StatCard {...tradeInData} />
        <StatCard {...tradeOutData} />
        <StatCard {...totalCashbackData} />
      </div>
      <div className="w-full lg:h-[418px] flex flex-col lg:flex-row  ">
        <div className="w-full lg:w-1/2 p-2  h-full">
          <BarChartComponent />
        </div>
        <div className="w-full lg:w-1/2 h-full  p-2">
          <PieChartComponent />
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl mt-6 px-2 font-semibold ">Recommendations</h1>
        <div className="flex mt-4 flex-col lg:flex-row  flex-wrap">
          <RecommendationCard
            imageUrl="/images/mastercard-logo.svg"
            percentage="20%"
            description="chose MasterCard conversions. Partner now!"
          />
          <RecommendationCard
            imageUrl="/images/redbull-logo.svg"
            percentage="20%"
            description="chose MasterCard conversions. Partner now!"
          />
          <RecommendationCard
            imageUrl="/images/starbucks-logo.svg"
            percentage="20%"
            description="chose MasterCard conversions. Partner now!"
          />
          <RecommendationCard
            imageUrl="/images/mcdonalds-logo.svg"
            percentage="20%"
            description="chose MasterCard conversions. Partner now!"
          />
        </div>
      </div>
    </div>
  );
}

export default BrandOverview;
