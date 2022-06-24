import React from "react";

function EntrepreneurBanner() {
  return (
    <div className="md:max-w-7xl mx-auto md:py-0 py-10">
      <div className="px-5 pb-5 md:py-24">
        <div className="flex flex-col justify-center space-y-3 p-3 text-center bg-gradient-to-br from-[#420848] via-[#420848] to-blue-800 text-slate-50 rounded-3xl md:py-10 shadow-current">
          <h2 className="text-xl font-semibold">
            10.000+ Entrepreneurs uses our invoice generator
          </h2>
          <div className="items-center">
            <button className="bg-green-500 py-2 px-6 text-sm rounded-md text-slate-50 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntrepreneurBanner;
