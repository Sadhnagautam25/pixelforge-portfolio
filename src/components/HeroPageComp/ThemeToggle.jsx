import React from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ isdark, setIsdark }) => {
  return (
    <div className="px-4 py-1.5 rounded-full bg-white/20 flex gap-2">
      <button
        onClick={() => setIsdark(false)}
        className={`size-8 rounded-full flex items-center justify-center
        ${!isdark ? "bg-white text-black" : "text-white/70 hover:bg-white/20"}`}
      >
        <Sun />
      </button>

      <button
        onClick={() => setIsdark(true)}
        className={`size-8 rounded-full flex items-center justify-center
        ${isdark ? "bg-white text-black" : "text-white/70 hover:bg-white/20"}`}
      >
        <Moon />
      </button>
    </div>
  );
};

export default ThemeToggle;
