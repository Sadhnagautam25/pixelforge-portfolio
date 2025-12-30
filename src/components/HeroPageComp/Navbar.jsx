import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Navbar = ({ isdark, setIsdark }) => {
  const [open, setOpen] = useState(false);
  const menuItems = ["About", "Program", "Product", "Events"];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const navbar = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(navbar.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
    });
  });

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full backdrop-blur-lg border shadow-md transition-colors
  ${isdark ? "bg-white/5 border-white/10" : "bg-white/10 border-white/30"}`}
      >
        <div
          ref={navbar}
          className="mx-auto h-20 px-4 sm:px-6 lg:px-10 flex items-center justify-between"
        >
          <h2 className=" text-[22px] font-semibold">PixelForge</h2>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <h4
                key={item}
                className=" px-4 py-1.5 rounded-full cursor-pointer
          hover:bg-white/20 hover:border hover:border-white/40 transition"
              >
                {item}
              </h4>
            ))}
            <ThemeToggle isdark={isdark} setIsdark={setIsdark} />
          </div>

          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay Menu (Mobile) */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-500
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Slide Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[75%] max-w-sm
            flex flex-col items-center gap-8 py-10
            backdrop-blur-xl bg-white/20 dark:bg-black/25 border-l border-white/20 dark:border-black/20
            shadow-lg`}
        >
          {/* Close Button */}
          <button className="self-end mr-6" onClick={() => setOpen(false)}>
            <X size={28} stroke="white" />
          </button>

          {/* Menu Items with hover effects */}
          {menuItems.map((item, idx) => (
            <h4
              key={idx}
              className="text-lg cursor-pointer px-6 py-2 rounded-lg
                hover:scale-105 hover:bg-white/30 dark:hover:bg-black/40
                transition-all duration-300 font-medium"
              onClick={() => setOpen(false)}
            >
              {item}
            </h4>
          ))}

          {/* Theme Toggle */}
          <div className="mt-4">
            <ThemeToggle isdark={isdark} setIsdark={setIsdark} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
