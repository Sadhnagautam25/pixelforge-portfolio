import React from "react";
import { Crown, User } from "lucide-react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const customTitle = useRef();
  const CraftingText = useRef();
  const turningText = useRef();
  const PixelForgeText = useRef();
  const image = useRef()

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(customTitle.current, {
      opacity: 0,
      scale:3,
      duration: 0.5,
    })
      .from(CraftingText.current, {
        opacity: 0,
        scale: 2,
        duration: 0.5,
      })
      .from(turningText.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
      })
      .from(PixelForgeText.current, {
        x: -40,
        y:40,
        opacity: 0,
        duration: 0.5,
      }).from(image.current,{
        scale:0,
        opacity:0,

      })
  });

  return (
    <section className="relative w-full overflow-hidden min-h-auto sm:min-h-[calc(100vh-80px)] pb-6 sm:pb-0">
      {/* Top Label */}
      <div className="w-full flex items-center px-4 sm:px-6 lg:px-12 pt-5">
        <h4 ref={customTitle} className="text-[10px] sm:text-xs tracking-[0.25em] opacity-70 ">
          CUSTOM WELLNESS
        </h4>
      </div>

      {/* Content + Image Container (flex-col + space-y) */}
      <div className="flex flex-col items-center w-full max-w-lg mx-auto mt-4 sm:mt-8 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="text-center relative z-10">
          <h1 ref={CraftingText} className="text-[18px] sm:text-[24px] md:text-[28px] leading-snug font-medium">
            Crafting Responsive Interfaces With Precision.
          </h1>

          <p ref={turningText} className="flex items-center justify-center gap-2 sm:gap-3 text-[12px] sm:text-[14px] md:text-[15px] opacity-85 mt-2">
            <span className="size-6 sm:size-7 bg-[#ee9b00] rounded-full flex items-center justify-center shrink-0">
              <Crown fill="#fff" size={14} />
            </span>
            Turning Ideas Into Scalable, High-Impact Websites
          </p>
        </div>

        {/* Background Branding */}
        <h1 ref={PixelForgeText}
          className="pointer-events-none select-none font-semibold tracking-tight opacity-90 whitespace-nowrap
          relative z-10 text-center mt-4
          text-[48px] max-[450px]:text-[62px]
          min-[451px]:text-[64px] min-[761px]:text-[96px]
          min-[1020px]:absolute  min-[1020px]:top-50 min-[1020px]:mt-0 min-[1020px]:text-[200px]
        "
        >
          PixelForge
        </h1>

        {/* Image below content only ≤640px */}
        <div className="relative w-full max-w-full  max-[640px]:mt-4 max-[640px]:block hidden z-0">
          <img ref={image}
            src="https://plus.unsplash.com/premium_photo-1694476737896-7fb48c55af19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Background"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
