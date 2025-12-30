import React, { useState } from "react";
import LeftImagePanel from "./sectionFour/LeftImagePanel";
import RightContent from "./sectionFour/RightContent";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFour = ({ isdark }) => {
  const [isLike, setisLike] = useState(false);

  const likeBtn = () => {
    if (isLike === false) {
      setisLike(true);
    } else {
      setisLike(false);
    }
  };

  const SectionFourRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: SectionFourRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

     tl.from(".sec4-right-profileSummary", {
        x:100,
        opacity: 0,
        duration: 0.6,
        stagger:0.3,
        ease: "power3.out",
      })  
  },{scope:SectionFourRef});

  return (
    <section
      ref={SectionFourRef}
      className={`w-full py-8 lg:py-10  ${
        isdark ? "bg-[#0f172a] text-white" : "bg-[#f5f6fb] text-gray-800"
      }`}
    >
      <div
        className="w-[96%] h-full m-auto 
    flex flex-col lg:flex-row 
    gap-6 lg:gap-10 
    lg:items-stretch"
      >
        <LeftImagePanel isdark={isdark} />
        <RightContent isdark={isdark} isLike={isLike} likeBtn={likeBtn} />
      </div>
    </section>
  );
};

export default SectionFour;
