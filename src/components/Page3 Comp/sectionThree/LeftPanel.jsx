import NavigationButtons from "./NavigationButtons";
import ImageOverlayCard from "./ImageOverlayCard";

const LeftPanel = ({ currentData, handleNext, handlePrev }) => {
  return (
    <div className="w-full lg:w-2/3 flex flex-col py-2">
  <h1 className="sec3-left-title text-[28px] sm:text-[36px] lg:text-[55px] mb-4 font-medium leading-tight">
    {currentData.title}
  </h1>

  <div className="flex flex-col md:flex-row flex-1 gap-6">
    <div className="w-full md:w-2/5 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl sm:text-6xl">
          {currentData.id}
          <span className="text-lg">/B</span>
        </h1>
        <p className="text-sm mt-3 w-full sm:w-[70%]">
          Upcoming Event
        </p>
      </div>

      <NavigationButtons
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>

    <ImageOverlayCard card1={currentData.card1} />
  </div>
</div>

  );
};

export default LeftPanel;


