import ProfileActions from "./ProfileActions";
import FeatureCard from "./FeatureCard";
import ImageHoverCard from "./ImageHoverCard";

const RightContent = ({ isdark, isLike, likeBtn }) => {
  return (
    <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col">

      <div className="sec4-right-profileSummary">
        <div className="flex justify-start items-center gap-2">
          <p className="size-2 bg-blue-400 rounded-full"></p>
          <h1 className="text-[14px] uppercase">Profile Summary</h1>
        </div>

        <h1 className="text-3xl w-full sm:w-[70%] mt-3 leading-tight font-medium sm:text-5xl">
          Frontend Developer (Fresher) | UI-Focused
        </h1>

        <ProfileActions isLike={isLike} likeBtn={likeBtn} isdark={{isdark}} />
      </div>

     <div className="bottom flex sm:flex-col flex-col-reverse md:flex-row gap-5 mt-6 lg:grow">
  <FeatureCard />
  <ImageHoverCard />
</div>

    </div>
  );
};

export default RightContent;
