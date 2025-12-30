const Navbar = ({ isdark }) => {
  return (
    <nav className="sec3-navbar w-full flex flex-col sm:flex-row justify-between gap-4 py-3">
      
      {/* Left Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          className={`py-2 px-4 sm:px-6 rounded-4xl text-sm sm:text-base transition-all
            ${
              isdark
                ? "bg-[#485060] text-white"
                : "bg-[#f5f6fb] text-gray-800"
            }`}
        >
          From bugs to breakthroughs
        </button>

        <button
          className={`py-2 px-4 sm:px-6 rounded-4xl text-sm sm:text-base transition-all
            ${
              isdark
                ? "bg-[#485060] text-white"
                : "bg-[#f5f6fb] text-gray-800"
            }`}
        >
          Code the challenge
        </button>
      </div>

      {/* Right Brand */}
      <div className="flex items-center gap-2 self-start sm:self-center">
        <div className="size-2 rounded-full bg-blue-400"></div>
        <h1 className="font-semibold text-sm sm:text-base">
          THE PROGRAM
        </h1>
      </div>

    </nav>
  );
};

export default Navbar;


