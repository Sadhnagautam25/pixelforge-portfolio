import { Globe, MoveRight, Zap, MapPin } from "lucide-react";

const RightSection = ({ isdark }) => {
  return (
    <div
      className={`right-card w-full lg:w-[60%]
      p-4 sm:p-6 lg:p-10
      flex flex-col md:flex-row gap-8 lg:gap-20
      rounded-4xl
      ${isdark ? "bg-[#4c4f56] text-white" : "bg-white text-gray-800"}`}
    >
      {/* Left Card */}
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-6">
        <div>
          <div className="flex items-center gap-1 font-semibold text-sm">
            <Globe size={16} stroke="#f77f00" /> EST-1997
          </div>

          <p className="mt-4 text-sm sm:text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, neque quod recusandae accusantium dolor consequuntur.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl flex flex-col font-semibold gap-2">
            <span>Interactive</span>
            <span>UI developer</span>
          </h2>
          <button
            className="group relative mt-6 w-full 
  rounded-4xl bg-black text-white
  px-5 py-3 sm:px-6 sm:py-4
  flex items-center justify-between
  overflow-hidden
  transition-all duration-300"
          >
            {/* Shine overlay */}
            <span
              className="pointer-events-none absolute inset-0
    -translate-x-full group-hover:translate-x-full
    transition-transform duration-700
    bg-linear-to-r from-transparent via-white/20 to-transparent"
            ></span>

            {/* Text */}
            <span className="relative z-10 font-medium">Join Now!</span>

            {/* Icon */}
            <MoveRight className="relative z-10 group-hover:translate-x-2 transition" />
          </button>
        </div>
      </div>

      {/* Right Card (IMAGE) */}
      <div className="w-full md:w-1/2 h-70 sm:h-87.5 md:h-auto rounded-4xl overflow-hidden relative">
        <img
          className=" right-img w-full h-full object-cover object-top"
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
          alt=""
        />

        <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between items-end">
          <button className="bg-white text-gray-700 py-1 px-3 sm:px-4 rounded-4xl text-xs sm:text-sm">
            @ wocintechchat.com
          </button>

          <div className="w-32 sm:w-40 h-35 rounded-4xl bg-white overflow-hidden self-start">
            <div className="h-[70%] p-2">
              {" "}
              <h1 className="font-medium text-gray-700">Christina</h1>{" "}
              <p className="flex items-center gap-1 text-xs text-gray-700">
                {" "}
                <MapPin size={14} /> New York, NY{" "}
              </p>{" "}
              <p className="text-xl text-center mt-4 font-medium text-gray-700">
                {" "}
                89% Connects{" "}
              </p>{" "}
            </div>

            <div className="h-[30%] flex">
              {" "}
              <div className="w-[70%] bg-blue-500 text-white flex justify-center items-center gap-2 font-semibold">
                {" "}
                <Zap size={18} fill="white" /> Boost{" "}
              </div>{" "}
              <div className="w-[30%] bg-orange-300"></div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
