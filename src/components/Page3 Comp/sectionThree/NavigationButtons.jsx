import { ArrowLeft, ArrowRight } from "lucide-react";

const NavigationButtons = ({ handlePrev, handleNext }) => {
  return (
    <div className="flex gap-5">
      <button
        onClick={handlePrev}
        className="group size-15 flex items-center justify-center text-gray-800 rounded-full
        border border-gray-300 bg-white transition-all duration-500
        hover:border-orange-400 hover:bg-orange-400 hover:text-white
        hover:shadow-lg active:scale-95"
      >
        <ArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="group size-15 flex items-center justify-center text-gray-800 rounded-full
        border border-gray-300 bg-white transition-all duration-300
        hover:border-orange-400 hover:bg-orange-400 hover:text-white
        hover:shadow-lg active:scale-95"
      >
        <ArrowRight className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
};

export default NavigationButtons;

