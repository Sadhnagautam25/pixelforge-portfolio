import ActivityCard from "./ActivityCard";

const LeftImagePanel = ({ isdark }) => {
  return (
    <div
      className="
  w-full lg:w-1/2 
  h-95 sm:h-112.5 md:h-130 lg:h-full
  rounded-4xl overflow-hidden relative
"
    >
      <img 
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1752170080635-db168448f85d?q=80&w=1051&auto=format&fit=crop"
        alt=""
      />

      <div className="absolute inset-0 backdrop-blur-xs bg-white/10 border border-white/20 flex justify-center items-center">
        <ActivityCard isdark={isdark} />
      </div>
    </div>
  );
};

export default LeftImagePanel;
