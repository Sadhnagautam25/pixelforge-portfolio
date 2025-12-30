import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = ({ isdark }) => {
  const sectionRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
          scrub: 2,
        },
      });

      // LEFT SIDE
      tl.from(".left-head", {
        y: 40,
        opacity: 0,
        duration: 0.6,
      })
        .from(".left-title span", {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.6,
        })
        .from(
          ".left-title img",
          {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".left-btns",
          {
            x: -40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".FAQ ",
          {
            x: -40,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        // RIGHT SIDE
        .from(
          ".right-card",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".right-img",
          {
            scale: 1.15,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.2"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className={`w-full min-h-screen px-4 sm:px-6 lg:px-10 py-10 flex flex-col lg:flex-row gap-8
      ${isdark ? "bg-[#0f172a]" : "bg-[#f5f6fb]"}`}
    >
      <LeftSection isdark={isdark} />
      <RightSection isdark={isdark} />
    </section>
  );
};

export default SectionTwo;
