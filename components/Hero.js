import React from "react";
import Nav from "./Nav";

function Hero() {
  return (
    <div className="md:max-w-7xl justify-center mx-auto">
      <span className="bg-white w-10 h-96 -right-20 bottom-16 absolute blur-3xl md:-left-20 md:h-[600px]" />
      <span className="absolute hidden md:block rounded-full md:right-56 bg-[#420848] blur-xl w-56 h-56 md:w-96 md:h-96 md:blur-3xl"></span>
      <img className="absolute -bottom-2 w-full left-0  hidden md:block" src="images/Curve.svg"></img>
      <div className="flex flex-col mx-5 md:flex-row-reverse md:items-center">
        <div className="pb-8 md:relative">
          <img src="/images/Frame 2.png"></img>
        </div>
        <div className="relative text-slate-50 text-3xl mb-3 md:text-7xl">
          <h1 className=" mb-5">
            Collect & Reconcile{" "}
            <span className="text-yellow-500">Invoice Payments</span>{" "}
            Automatically
          </h1>
          <p className=" text-sm md:text-xl leading-5 font-light pb-10">
            Invoicing is the fastest way for your business to bill costumers
            with subscriptions or invoices. Capture more revenue
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
