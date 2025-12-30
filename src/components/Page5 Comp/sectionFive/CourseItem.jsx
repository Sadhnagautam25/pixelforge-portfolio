import { ArrowUpRight } from "lucide-react";

const CourseItem = ({ course, onMove, onEnter, onLeave }) => {
  return (
    <div className="w-full h-22.5 sm:h-27.5">
      <div
        className="
          group relative h-full w-full
          flex items-center justify-between
          px-8 rounded-2xl
          border-b border-gray-600
          transition-all duration-300
          hover:bg-[#ff4c01] cursor-pointer
        "
        onMouseMove={(e) => onMove(e, e.currentTarget.querySelector("img"))}
        onMouseEnter={(e) => onEnter(e.currentTarget.querySelector("img"))}
        onMouseLeave={(e) => onLeave(e.currentTarget.querySelector("img"))}
      >
        <h4 className="text-white sm:text-2xl z-10">{course.title}</h4>

        <div
          className="
            size-12 rounded-full bg-white
            flex items-center justify-center
            z-10 cursor-pointer
            opacity-0 scale-75
            transition-all duration-300
            group-hover:opacity-100 group-hover:scale-100
            hover:bg-linear-to-br hover:from-orange-300 hover:to-orange-500
            hover:-translate-y-1
            active:scale-90
          "
        >
          <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-12" />
        </div>

        <img
          src={course.image}
          alt={course.title}
          className="
    absolute
    w-30 h-40 sm:w-52 sm:h-64 lg:w-60 lg:h-70
    object-cover rounded-2xl
    pointer-events-none
    opacity-0 scale-95
    shadow-2xl shadow-orange-500/30
  "
        />
      </div>
    </div>
  );
};

export default CourseItem;
