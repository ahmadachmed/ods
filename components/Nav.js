import React, { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(true);
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Service",
      href: "/service",
    },
    {
      title: "Help",
      href: "/help",
    },
  ];

  return (
    <div className="md:max-w-7xl justify-center mx-auto">
      <div
        className={`flex justify-between py-6 items-center transition-all
         `}
      >
        <div className="flex ml-5 text-slate-50 font-bold text-lg">
          <h1>
            Our Deep
            <span className=" text-yellow-500"> Story.</span>
          </h1>
        </div>
        <ul
          className={`flex sm:flex-row md:w-auto md:h-auto md:static md:bg-transparent md:text-slate-50 absolute flex-col items-end w-full p-5 text-slate-50 bg-blue-800 transition-all ease-in-out
          ${open ? "-top-96 left-0" : "top-16 left-0"}`}
        >
          {links.map((el, index) => {
            return (
              <li key={index} className="my-2 md:mx-4">
                <a href={el.href}>{el.title}</a>
              </li>
            );
          })}
        </ul>
        
        <div className="flex">
          <button className="pr-5 text-slate-50">Login</button>
          <button
            onClick={() => setOpen(!open)}
            className="flex mr-5 bg-green-500 py-1 px-4 text-sm rounded-md text-slate-50 md:hidden"
          >
            Menu
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default Nav;
