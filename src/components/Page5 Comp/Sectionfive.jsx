import React from "react";
import Header from "./sectionFive/Header";
import CourseList from "./sectionFive/CourseList";

const Sectionfive = ({ isdark }) => {
  return (
    <section
      className={`w-full min-h-screen py-6 sm:py-8 ${
        isdark ? "bg-[#0f172a]" : "bg-[#f5f6fb]"
      }`}
    >
      <div
        className="w-[96%] min-h-screen m-auto bg-black rounded-4xl 
px-4 sm:px-6 lg:px-8 
py-4 sm:py-6 
flex flex-col gap-6 overflow-hidden"
      >
        <Header />
        <CourseList />
      </div>
    </section>
  );
};

export default Sectionfive;
