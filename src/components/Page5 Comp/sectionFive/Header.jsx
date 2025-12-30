const Header = () => {
  return (
   <div className="flex flex-col md:flex-row gap-4 md:gap-0">

      <div className="w-full md:w-[30%]">

        <div className="flex items-center gap-2 mt-4">
          <span className="size-2 bg-white rounded-full" />
          <p className="text-white text-sm tracking-wide">
            CURRENT EVENTS
          </p>
        </div>
      </div>

     <div className="w-full md:w-[70%]">

        <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl leading-tight">
          Interactive Frontend Events Powering Modern User Experiences.
        </h1>
      </div>
    </div>
  );
};

export default Header;
