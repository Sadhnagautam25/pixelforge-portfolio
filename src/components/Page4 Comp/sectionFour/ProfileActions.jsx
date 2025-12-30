import { Star, Link, ThumbsUp } from "lucide-react";

const ProfileActions = ({ isLike, likeBtn, isdark }) => {
  return (
   <div className="flex gap-3 sm:gap-5 mt-6 flex-wrap">

      {[Star, Link].map((Icon, i) => (
        <p
          key={i}
          className={`size-16 rounded-full cursor-pointer bg-white flex justify-center items-center
          transition-all duration-200 hover:scale-110 hover:-translate-y-1
          hover:bg-linear-to-r hover:from-orange-400 hover:to-orange-200
          hover:shadow-lg hover:shadow-orange-300/40 active:scale-95 group ${
            isdark ? "text-gray-800" : " text-gray-800"
          }`}
        >
          <Icon className="group-hover:text-white" />
        </p>
      ))}

      <p
        onClick={likeBtn}
        className={`size-16 rounded-full cursor-pointer bg-white flex justify-center items-center
        transition-all duration-200 hover:scale-110 hover:-translate-y-1
        hover:bg-linear-to-r hover:from-orange-400 hover:to-orange-200
        hover:shadow-lg hover:shadow-orange-300/40 active:scale-95 group ${
          isdark ? "text-gray-800" : " text-gray-800"
        }`}
      >
        <ThumbsUp
          className={`group-hover:text-white ${
            isLike ? "fill-red-500 stroke-red-500" : ""
          }`}
        />
      </p>
    </div>
  );
};

export default ProfileActions;
