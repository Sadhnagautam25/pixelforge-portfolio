import { MapPin, Radio } from "lucide-react";

const ImageOverlayCard = ({ card1 }) => {
  return (
    <div className=" w-full md:w-3/5 h-75 sm:h-95 lg:h-full rounded-4xl overflow-hidden relative group">
      <img className="w-full h-full object-cover" src={card1.image} alt="" />

      <div
        className="absolute inset-0 cursor-pointer -translate-y-full group-hover:translate-y-0
    transition-transform duration-700 ease-out
    backdrop-blur-xl bg-white/10 border border-white/20
    p-4 sm:p-6 lg:p-10 flex flex-col justify-between rounded-4xl"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl lg:text-4xl text-white font-semibold">
            {card1.title2}
          </h1>
          <p className="text-white text-sm sm:text-base leading-relaxed line-clamp-4">
            {card1.desc}
          </p>
          <span className="text-white flex items-center gap-2">
            <MapPin size={16} /> {card1.location}
          </span>
        </div>

        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-2 text-red-500 bg-white/50 px-4 py-2 rounded-4xl text-sm">
            <Radio /> Live
          </div>

          <button className="text-white px-4 py-2 rounded-4xl text-sm border border-white/30 bg-white/10">
            {card1.email}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlayCard;
