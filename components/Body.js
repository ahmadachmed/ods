import React from "react";
import Curve from "./Curve";
import EntrepreneurBanner from "./EntrepreneurBanner";
import Superiority from "./Superiority";
import Support from "./Support";
import Title from "./Title";
import Works from "./Works";

function Body() {
  return (
    <div className="bg-blue-50 mx-auto">
      <div className="md:max-w-7xl mx-auto">
        <Curve />
        <Support />
        <EntrepreneurBanner/>
        <Title/>
        <Superiority/>
        <Works/>
      </div>
    </div>
  );
}

export default Body;
