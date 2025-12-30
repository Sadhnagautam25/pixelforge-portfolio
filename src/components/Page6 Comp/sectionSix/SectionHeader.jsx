import { MessageCircleMore } from "lucide-react";

const SectionHeader = ({ isdark }) => {
  return (
    <div className=" sec6-header w-full flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[55%]">
        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl leading-tight ${
            isdark ? "bg-[#0f172a] text-white" : "bg-[#f5f6fb] text-black"
          }`}
        >
          Frontend Experience Events With Smart Design Interactions
        </h1>
      </div>

      <div
        className="
  w-full lg:w-[45%]
  flex flex-row lg:flex-col
  items-start lg:items-end
  gap-3
"
      >
        <button className="bg-white py-1.5 px-5 rounded-4xl flex justify-center items-center gap-1.5">
          <div className="size-2 bg-blue-400 rounded-full"></div>
          <p>Testimonial</p>
        </button>

        <button className="bg-white py-1.5 px-5 justify-center items-center rounded-4xl flex gap-1.5">
          <MessageCircleMore size={15} /> Customer Says
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
