import { Flame } from "lucide-react";

const ActivityCard = ({ isdark }) => {
  return (
    <div
      className={` w-55 h-62.5  sm:size-90
  p-6 sm:p-8
  rounded-4xl
  transition-all duration-500
  hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]
  border border-transparent hover:border-orange-200 group
  ${isdark ? "bg-white text-black" : "bg-white text-gray-800"}
`}
    >
      <div className="w-full flex justify-between items-center">
        <span className="flex items-center gap-1 font-medium">
          <Flame
            size={18}
            fill="black"
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          Activity
        </span>

        <button className="bg-orange-500 px-3 py-0.5 rounded-2xl text-white text-[14px] transition-all duration-300 group-hover:bg-orange-600">
          87%
        </button>
      </div>

      <div className="flex flex-col mt-5">
        <span className="flex gap-2 items-end">
          <strong className="text-4xl font-medium transition-colors duration-300 group-hover:text-orange-500">
            2.780
          </strong>
          <p className="text-gray-400 text-[14px]">Col</p>
        </span>

        <span className="text-[14px] text-gray-400 mt-1">
          Lorem ipsum dolor sit amet consectetur.
        </span>
      </div>

      <div className="w-full mt-3 overflow-hidden rounded-xl">
        <img
          className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src="https://wp-asset.groww.in/wp-content/uploads/2021/04/13170654/clc.png"
          alt=""
        />
      </div>

      <div className="flex justify-between mt-5 gap-4">
        {["Projects", "Experience", "Skills"].map((item, i) => (
          <span
            key={i}
            className="flex flex-col items-start p-3 rounded-lg cursor-pointer
            transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50 hover:shadow-md"
          >
            <h4 className="text-orange-500 font-medium text-[16px] hidden sm:block">{item}</h4>
            <p className="text-[12px] text-gray-500 hidden sm:block">
              {item === "Projects"
                ? "500+"
                : item === "Experience"
                ? "5 Years"
                : "22+"}
            </p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;
