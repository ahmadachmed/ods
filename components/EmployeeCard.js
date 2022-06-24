import React from "react";

function EmployeeCard({ className, subTitle,title}) {
  const addClassName = className ? `${className}` : "";
  const addTitle = title;
  const addSubtitle = subTitle;
  return (
    <div className={`flex flex-col p-5 h-full w-full text-center items-center space-y-4  rounded-xl border-x-2 border-y-2 md:shadow-lg shadow-md ${addClassName}`}>
      <div className="rounded-full w-20 h-20 bg-slate-400">
        <img></img>
      </div>
      <h2 className="text-slate-800 font-semibold">{addTitle}</h2>
      <p className="text-slate-600 font-light text-sm">{addSubtitle}</p>
    </div>
  );
}

export default EmployeeCard;
