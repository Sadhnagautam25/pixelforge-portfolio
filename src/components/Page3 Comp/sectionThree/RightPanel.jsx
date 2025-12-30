import ProfileCard from "./ProfileCard";

const RightPanel = ({ currentData }) => {
  return (
    <div className="sec3-right-panel w-full lg:w-1/3 rounded-4xl flex flex-col px-3 sm:px-5 py-6">
      <p className="sec3-right-text text-sm sm:text-base text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit...
      </p>

      <div className="w-full flex-1 pt-6 px-2 sm:px-6">
        <ProfileCard
          card2={currentData.card2}
          email={currentData.card1.email}
        />
      </div>
    </div>
  );
};


export default RightPanel;


