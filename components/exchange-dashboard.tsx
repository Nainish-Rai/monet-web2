import React from "react";
import ExchangeCard from "./exchange-card";

type Props = {};

function ExchangeDashboard({}: Props) {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center">
      <ExchangeCard />
    </div>
  );
}

export default ExchangeDashboard;
