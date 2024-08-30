import React from "react";

export default function ComingSoon() {
  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center p-4">
      {/* Dashboard-like background elements */}
      <div className="absolute inset-0 grid grid-cols-3 gap-4 mt-4 text-gray-500 overflow-hidden blur">
        <div className="col-span-3 bg-gray-900 rounded-lg p-4">Marketing</div>
        <div className="bg-gray-900 rounded-lg p-4">Sales</div>
        <div className="bg-gray-900 rounded-lg p-4">Customers</div>
        <div className="bg-gray-900 rounded-lg p-4">All Orders</div>
      </div>

      {/* Coming Soon overlay */}
      <div className="relative z-10 bg-yellow-400 bg-opacity-90 rounded-3xl p-8 text-center shadow-lg">
        <p className="text-gray-800 text-xl mb-2">Stay tuned</p>
        <h2 className="text-gray-900 text-4xl md:text-5xl font-bold">
          Coming soon!
        </h2>
      </div>
    </div>
  );
}
