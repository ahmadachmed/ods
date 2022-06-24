import React from "react";
import Curve from "./Curve";

import Hero from "./Hero";
import Nav from "./Nav";

function Header() {
  return (
    <div>
      <div className="bg-blue-800 w-full relative overflow-x-hidden md:overflow-x-visible">
        <Nav />
        <Hero />
      </div>
    </div>
  );
}

export default Header;
