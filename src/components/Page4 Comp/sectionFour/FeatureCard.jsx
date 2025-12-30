import { ArrowUpRight } from "lucide-react";

const FeatureCard = () => {
  return (
   <div className="left-side w-full md:w-1/2 sm:min-h-70 md:h-full  flex flex-col">


      <div>
        <p className="text-gray-500">
          I enjoy building responsive, user-friendly interfaces using Tailwind
          CSS and modern UI practices.
        </p>
        <h4 className="mt-2 uppercase font-medium text-gray-600">
          Continuous Learning
        </h4>
      </div>

      <div className=" pt-10 sm:grow flex items-end justify-between group cursor-pointer">
        <p
          className="
      size-20 rounded-full
      flex justify-center items-center

      bg-linear-to-br
      from-orange-400
      to-orange-600

      transition-all duration-300 ease-out
      group-hover:-translate-y-2
      group-hover:scale-110
      group-active:scale-90
      group-hover:from-orange-500
      group-hover:to-orange-700
      shadow-lg
    "
        >
          <ArrowUpRight
            size={45}
            stroke="white"
            className="
        transition-transform duration-300
        group-hover:rotate-45
      "
          />
        </p>

        <h4
          className="
      font-semibold w-[25%] text-end leading-5
      transition-colors duration-300
      group-hover:text-orange-500
    "
        >
          Responsive Design
        </h4>
      </div>
    </div>
  );
};

export default FeatureCard;
