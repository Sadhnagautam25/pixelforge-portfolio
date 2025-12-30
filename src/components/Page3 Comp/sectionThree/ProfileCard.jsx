import { Globe, SquareUserRound } from "lucide-react";

const ProfileCard = ({ card2, email }) => {
  return (
    <div className="sec3-profile-card w-full h-87.5 sm:h-full rounded-4xl overflow-hidden relative group cursor-pointer">
      
      {/* Image */}
      <img
        className="sec3-profile-img w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        src={card2.image2}
        alt=""
      />

      {/* Overlay */}
      <div className="
        absolute inset-0 p-4 sm:p-5 text-white
        bg-linear-to-t from-black/70 via-black/30 to-transparent
        flex flex-col justify-between
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
      ">
        <div className="size-20 sm:size-28 rounded-2xl self-end bg-black/40 backdrop-blur-md p-3">
          <p className="font-semibold">{card2.follow}</p>
          <p className="text-xs">{email}</p>
        </div>

        <div className="space-y-1">
          <p className="text-xs flex items-center gap-1">
            <SquareUserRound size={12} /> {card2.member}
          </p>
          <p className="text-xl sm:text-3xl line-clamp-2 font-semibold">
            {card2.title}
          </p>
          <p className="text-xs flex items-center gap-1">
            <Globe size={12} /> {card2.location2}
          </p>
        </div>
      </div>
    </div>
  );
};


export default ProfileCard;

