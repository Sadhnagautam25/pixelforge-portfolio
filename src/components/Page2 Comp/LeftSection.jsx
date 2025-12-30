import { Import, MapPlus, ScreenShare } from "lucide-react";
import FAQ from './FAQ.jsx'

const LeftSection = ({ isdark }) => {
  return (
    <div
      className={`w-full lg:w-[40%]
      flex flex-col
      ${isdark ? "bg-[#0f172a] text-gray-850" : "bg-[#f5f6fb] text-gray-850"}`}
    >
      {/* Heading */}
      <div className="left-head flex items-center gap-2">
        <div className="size-2 rounded-full bg-blue-400"></div>
        <h1
          className={`ont-semibold text-sm sm:text-base  ${
            isdark ? "bg-[#0f172a] text-white" : "bg-[#f5f6fb] text-gray-850"
          }`}
        >
          THE BENEFIT
        </h1>
      </div>

      {/* Title */}
      <h1
        className={`left-title mt-4 flex flex-col gap-3
        text-3xl sm:text-4xl md:text-5xl xl:text-6xl
        font-medium
        ${isdark ? "text-white" : "text-gray-900"}`}
      >
        <div className=" flex items-end gap-2 flex-wrap">
          <span>Explore</span>
          <img
            className="size-12 sm:size-16 md:size-20"
            src="https://static.vecteezy.com/system/resources/previews/060/154/592/non_2x/wonderful-unparalleled-a-penguin-no-background-with-transparent-background-free-png.png"
            alt=""
          />
          <span>our</span>
        </div>
        <span >flexible of activity.</span>
      </h1>

      {/* Buttons */}
      <div className="left-btns mt-8 flex gap-4">
        {" "}
        <button className=" flex items-center gap-2 px-5 py-1.5 rounded-4xl text-sm font-medium cursor-pointer bg-white text-gray-800 border border-transparent transition-all duration-300 ease-in-out hover:border-blue-400 hover:shadow-[0_8px_20px_rgba(59,130,246,0.25)] hover:text-blue-500">
          {" "}
          <MapPlus size={18} className="transition-colors duration-300" /> Code
          meets creativity{" "}
        </button>{" "}
        <button className="flex items-center gap-2 px-5 py-1.5 rounded-4xl text-sm font-medium cursor-pointer bg-white text-gray-800 border border-transparent transition-all duration-300 ease-in-out hover:border-orange-400 hover:shadow-[0_8px_20px_rgba(251,146,60,0.25)] hover:text-orange-500">
          {" "}
          <ScreenShare
            size={18}
            className="transition-colors duration-300"
          />{" "}
          Modern UI builder{" "}
        </button>{" "}
      </div>

      {/* FAQ */}
      <FAQ />
    </div>
  );
};

export default LeftSection;
