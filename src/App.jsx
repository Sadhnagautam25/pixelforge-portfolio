import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/HeroPageComp/Navbar";
import Hero from "./components/HeroPageComp/Hero";
import SectionTwo from "./components/Page2 Comp/SectionTwo";
import SectionThree from "./components/Page3 Comp/SectionThree";
import SectionFour from "./components/Page4 Comp/SectionFour";
import Sectionfive from "./components/Page5 Comp/Sectionfive";
import SectionSix from "./components/Page6 Comp/SectionSix";

const App = () => {
  const dancePenguin = useRef(null);
  const tl = useRef(null);
  const [isdark, setIsdark] = useState(false);

  useGSAP(() => {
    tl.current = gsap.to(dancePenguin.current, {
      x: -50,
      rotate: 5,
      duration: 1.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      paused: true,
      transformOrigin: "center bottom",
    });
  }, []);

  return (
    <>
      {/* HERO WRAPPER */}
      <main
        className={`w-full min-h-screen overflow-hidden flex flex-col transition-colors duration-500
  ${
    isdark
      ? "bg-linear-to-br from-[#020617] via-[#0f172a] to-[#1e293b] text-white"
      : "bg-linear-to-br from-[#0f4c75] via-[#3282b8] to-[#bbe1fa] text-white"
  }`}
      >
        <Navbar isdark={isdark} setIsdark={setIsdark} />

        {/* Responsive container */}
        <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-10 overflow-hidden">
          <Hero />
        </div>
      </main>

      {/* ALL SECTIONS (flow naturally) */}
      <SectionTwo isdark={isdark} />
      <SectionThree isdark={isdark} />
      <SectionFour isdark={isdark} />
      <Sectionfive isdark={isdark} />
      <SectionSix isdark={isdark} />
    </>
  );
};

export default App;
