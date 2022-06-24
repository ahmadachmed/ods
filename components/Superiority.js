import React from "react";
import EmployeeCard from "./EmployeeCard";

function Superiority() {
  const needs = [
    {
      judul: "Freelancers",
      subTitle: "Accounting Software For Frelancers",
      class: "border-x-purple-300 border-y-purple-100 shadow-purple-100 md:shadow-purple-100",
    },
    {
      judul: "Self-Employed",
      subTitle: "Accounting Software For Self-Employed",
      class: "border-x-pink-300 border-y-pink-100 shadow-pink-100 md:shadow-pink-100",
    },
    {
      judul: "Employed",
      subTitle: "Accounting Software For Employed",
      class: "border-x-yellow-300 border-y-yellow-100 shadow-yellow-100 md:shadow-yellow-100",
    },
    {
      judul: "Contractors",
      subTitle: "Accounting Software For Contractors",
      class: "border-x-cyan-300 border-y-cyan-100 shadow-cyan-100 md:shadow-cyan-100",
    },
  ];
  return (
    <div className="md:max-w-7xl py-10">
      <div className="grid md:grid-cols-4 items-center md:gap-x-10 md:px-0 grid-cols-1 gap-y-5 md:gap-y-0 px-5">
        {needs.map((el, index) => {
          return (
            <EmployeeCard
              key={index}
              className={el.class}
              title={el.judul}
              subTitle={el.subTitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Superiority;
