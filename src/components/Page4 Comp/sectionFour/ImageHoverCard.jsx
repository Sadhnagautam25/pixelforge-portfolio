import { UserStar } from "lucide-react";

const ImageHoverCard = () => {
  return (
   <div
  className="
  right-side 
  w-full md:w-1/2 h-full
  sm:h-90 md:h-full
  rounded-4xl overflow-hidden group cursor-pointer
"
>

    <div className="w-full sm:h-[70%] md:h-[75%] relative overflow-hidden">

        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop"
          alt=""
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 flex justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <button
            className="flex items-center gap-1 px-5 py-2 rounded-4xl bg-white cursor-pointer active:scale-95 group-hover:bg-linear-to-r
           group-hover:from-orange-500
           group-hover:to-orange-300 transition-all"
          >
            <UserStar size={20} className="group-hover:text-white" />
            <span className="group-hover:text-white">View more</span>
          </button>
        </div>
      </div>

      <div className="w-full h-[25%] flex items-end">
        <div className="w-full h-full bg-white flex justify-center items-center group-hover:-translate-y-2 transition-all duration-500">
          <p className="flex flex-col items-center text-center">
            <span className="font-semibold text-lg group-hover:text-orange-500 text-gray-800">
              UI Developer
            </span>
            <span className="text-gray-500 text-sm w-[80%]">
              Crafting clean, responsive interfaces with modern design
              principles.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageHoverCard;
