import { UserStar, DollarSign, ArrowUpRight } from "lucide-react";

const ImageProfileCard = ({ CurrData }) => {
  return (
    <div
      className="  sec6-image-card group 
  w-full lg:w-[38%]
  min-h-90   sm:min-h-100 lg:h-125
  rounded-4xl overflow-hidden relative
"
    >
      <img
        src={CurrData.image}
        alt={CurrData.role}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className=" absolute inset-0 bg-black/35 p-5 flex flex-col justify-between group-hover:bg-black/45 transition-all">
        <div className="flex flex-col gap-2  items-start">
          <button className="bg-white py-1 px-3 rounded-full flex justify-center items-center gap-1.5">
            <UserStar size={14} /> {CurrData.badge1}
          </button>
          <button className="bg-white py-1 px-3 rounded-full flex justify-center items-center gap-1.5">
            <span className="size-2 bg-blue-500 rounded-full" />
            {CurrData.badge2}
          </button>
        </div>

        <div className="text-white text-center flex flex-col items-center gap-1.5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">{CurrData.role}</h1>
          <p className="text-sm">{CurrData.quote}</p>

          <button
            className="
    mt-3 px-4 py-2 rounded-full
    flex gap-1 justify-center items-center cursor-pointer

    bg-gray-100 text-gray-800 border-none font-semibold
    shadow-sm

    transition-all duration-300 ease-out
    hover:scale-105 hover:shadow-lg

    hover:bg-linear-to-r
    hover:from-orange-500
    hover:to-orange-300
    hover:text-white

    active:scale-95
  "
          >
            <DollarSign
              size={16}
              className="
      transition-transform duration-300
      group-hover:rotate-12
    "
            />
            {CurrData.accepted}
          </button>
        </div>

        <div className="flex justify-between items-end">
          <p className="text-white">View Profile</p>
          <div className="bg-white size-14 rounded-full flex items-center justify-center group-hover:bg-orange-500">
            <ArrowUpRight className="group-hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageProfileCard;
