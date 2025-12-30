import { ArrowUpRight } from "lucide-react";

const NextButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        group relative size-16 rounded-full
        border-2 border-gray-300
        flex justify-center items-center
        cursor-pointer overflow-hidden
        transition-all duration-300
        hover:border-blue-500 hover:scale-105 hover:shadow-xl
        active:scale-95
      "
    >
      <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping opacity-75" />
      <span className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

      <ArrowUpRight
        size={30}
        className="relative z-10 transition-all duration-300 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </div>
  );
};

export default NextButton;
