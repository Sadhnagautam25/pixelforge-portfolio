import StarRating from "./StarRating";
import NextButton from "./NextButton";

const TestimonialCard = ({ CurrData, handleNext }) => {
  return (
    <div
      className="
  w-full lg:w-[62%] h-125
  bg-white rounded-4xl
  p-5 sm:p-6 lg:p-8
  flex flex-col
"
    >
      <div>
        <div className="w-full flex items-center gap-4">
          <span className="flex justify-center items-center gap-1">
            <div className="size-2 bg-blue-500 rounded-full"></div>
            {CurrData.count}
          </span>
          <div className="border w-full"></div>
        </div>

        <h1 className="sec6-left-qoute text-xl sm:text-2xl lg:text-3xl mt-4 lg:w-[70%]">
          {CurrData.quote}
        </h1>

        <div className="flex gap-2 mt-4 items-center">
          <StarRating rating={CurrData.rating} />
          <span className="font-semibold">{CurrData.rating}</span>
        </div>
      </div>

      <div className="flex justify-between items-end grow">
        <div>
          <h2 className="text-2xl font-medium">{CurrData.role}</h2>
          <p>{CurrData.description}</p>
        </div>

        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
};

export default TestimonialCard;
