import React from "react";

function Works() {
  return (
    <div className="md:max-w-7xl py-10">
      <div className="flex flex-col md:flex-row gap-x-10 px-5 items-center">
        <div className="flex md:w-1/2 mb-10">
          <img className="" src="images/Frame 2.png"></img>
        </div>
        <div className="md:w-1/2 font-semibold text-3xl">
          <h1 className="mb-10">How It Works</h1>
          <div className="flex flex-col gap-y-5">
            <div className="flex relative overflow-hidden flex-col shadow-md rounded-xl p-3">
              <input
                type="checkbox"
                className="absolute right-15 h-8 w-full peer cursor-pointer opacity-0"
              ></input>
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg">One Time Customers</h2>
                <img
                  src="icons/Chevron.svg"
                  className="w-10 p-3 border-green-500 border-2 rounded-full text-white peer-checked:rotation-180 active:rotation-180 cursor-pointer duration-300 transition-transform"
                ></img>
              </div>
              <div className="border-b-2 rounded-full w-full border-slate-300 transition-all hidden peer-checked:block mt-2 mb-5"></div>
              <div className="overflow-hidden transition-all ease-in-out duration-300 h-0 peer-checked:h-full font-light text-xs">
                <p>
                  Your Customers enters their payment details securely inline,
                  authorizing you to collect payments by Direct Debit. You can
                  add the customizable payment page directly your website or
                  send them a secure link.
                </p>
              </div>
            </div>
            <div className="flex relative overflow-hidden flex-col shadow-md rounded-xl p-3">
              <input
                type="checkbox"
                className="absolute right-15 h-8 w-full peer cursor-pointer opacity-0"
              ></input>
              <div className="flex items-center justify-between">
                <h2 className=" font-semibold text-lg">Schedule Payments</h2>
                <img
                  src="icons/Chevron.svg"
                  className="w-10 p-3 border-green-500 border-2 rounded-full text-white peer-checked:rotation-180 active:rotation-180 cursor-pointer duration-300 transition-transform"
                ></img>
              </div>
              <div className="border-b-2 rounded-full w-full border-slate-300 transition-all hidden peer-checked:block mt-2 mb-5"></div>
              <div className="overflow-hidden transition-all ease-in-out duration-500 h-0 peer-checked:h-full font-light text-xs">
                <p>
                  Your Customers enters their payment details securely inline,
                  authorizing you to collect payments by Direct Debit. You can
                  add the customizable payment page directly your website or
                  send them a secure link.
                </p>
              </div>
            </div>
            <div className="flex relative overflow-hidden flex-col shadow-md rounded-xl p-3">
              <input
                type="checkbox"
                className="absolute right-15 h-8 w-full peer cursor-pointer opacity-0"
              ></input>
              <div className="flex items-center justify-between">
                <h2 className=" font-semibold text-lg">Get Paid Automatically</h2>
                <img
                  src="icons/Chevron.svg"
                  className="w-10 p-3 border-green-500 border-2 rounded-full text-white peer-checked:rotation-180 active:rotation-180 cursor-pointer duration-300 transition-transform"
                ></img>
              </div>
              <div className="border-b-2 rounded-full w-full border-slate-300 transition-all hidden peer-checked:block mt-2 mb-5"></div>
              <div className="overflow-hidden transition-all ease-in-out duration-500 h-0 peer-checked:h-full font-light text-xs">
                <p>
                  Your Customers enters their payment details securely inline,
                  authorizing you to collect payments by Direct Debit. You can
                  add the customizable payment page directly your website or
                  send them a secure link.
                </p>
              </div>
            </div>
            <div className="flex relative overflow-hidden flex-col shadow-md rounded-xl p-3">
              <input
                type="checkbox"
                className="absolute right-15 h-8 w-full peer cursor-pointer opacity-0"
              ></input>
              <div className="flex items-center justify-between">
                <h2 className=" font-semibold text-lg">Keep Track</h2>
                <img
                  src="icons/Chevron.svg"
                  className="w-10 p-3 border-green-500 border-2 rounded-full text-white peer-checked:rotation-180 active:rotation-180 cursor-pointer duration-300 transition-transform"
                ></img>
              </div>
              <div className="border-b-2 rounded-full w-full border-slate-300 transition-all hidden peer-checked:block mt-2 mb-5"></div>
              <div className="overflow-hidden transition-all ease-in-out duration-500 h-0 peer-checked:h-full font-light text-xs">
                <p>
                  Your Customers enters their payment details securely inline,
                  authorizing you to collect payments by Direct Debit. You can
                  add the customizable payment page directly your website or
                  send them a secure link.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Works;
