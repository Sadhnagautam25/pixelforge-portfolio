import { useState } from "react";
import Navbar from "./sectionThree/Navbar";
import LeftPanel from "./sectionThree/LeftPanel";
import RightPanel from "./sectionThree/RightPanel";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionThree = ({ isdark }) => {
  let frontendDev = [
    {
      id: "01",
      title: "Engineering solutions for real-world challenges",
      card1: {
        title2: "Code. Animate. Inspire.",
        image:
          "https://images.unsplash.com/photo-1763568258605-6783d4fad7b5?q=80&w=1170&auto=format&fit=crop",
        desc: "I focus on crafting clean and responsive web experiences that combine modern design principles with efficient code to deliver smooth, engaging user interfaces.",
        location: "South Africa",
        email: "gettyimages.com",
      },
      card2: {
        title: "React Frontend Developer",
        image2:
          "https://images.unsplash.com/photo-1752170080622-18196de87763?q=80&w=749&auto=format&fit=crop",
        follow: "2.88K",
        member: "1.20K member",
        location2: "New Zealand",
      },
    },
    {
      id: "02",
      title: "Designing intuitive digital experiences",
      card1: {
        title2: "Design. Develop. Deliver.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1170&auto=format&fit=crop",
        desc: "I build modern UI interfaces using React and Tailwind CSS, focusing on usability, performance, and clean component architecture.",
        location: "India",
        email: "portfolio.dev",
      },
      card2: {
        title: "Frontend UI Developer",
        image2:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=749&auto=format&fit=crop",
        follow: "3.12K",
        member: "980 member",
        location2: "India",
      },
    },
    {
      id: "03",
      title: "Transforming ideas into interactive web apps",
      card1: {
        title2: "Build. Scale. Perform.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1170&auto=format&fit=crop",
        desc: "Passionate about building scalable frontend applications with smooth animations and pixel-perfect layouts.",
        location: "United States",
        email: "frontendhub.dev",
      },
      card2: {
        title: "JavaScript Frontend Developer",
        image2:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=749&auto=format&fit=crop",
        follow: "4.05K",
        member: "1.75K member",
        location2: "California",
      },
    },
    {
      id: "04",
      title: "Crafting performance-driven user interfaces",
      card1: {
        title2: "Clean Code. Smooth UX.",
        image:
          "https://images.unsplash.com/photo-1763568258415-6f6a78a4ef18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dp",
        desc: "Focused on responsive design, accessibility, and performance optimization for modern web applications.",
        location: "United Kingdom",
        email: "uiuxworld.com",
      },
      card2: {
        title: "Frontend Web Developer",
        image2:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=749&auto=format&fit=crop",
        follow: "2.45K",
        member: "1.10K member",
        location2: "London",
      },
    },
    {
      id: "05",
      title: "Building engaging web interfaces with purpose",
      card1: {
        title2: "Think. Code. Create.",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop",
        desc: "I specialize in creating interactive landing pages and animated UI experiences using GSAP and modern frontend tools.",
        location: "Australia",
        email: "creative.dev",
      },
      card2: {
        title: "Creative Frontend Developer",
        image2:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=749&auto=format&fit=crop",
        follow: "3.67K",
        member: "1.50K member",
        location2: "Sydney",
      },
    },
  ];

  const SectionThreeRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: SectionThreeRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          
        },
      });

      tl.from(".sec3-navbar", {
        y: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".sec3-left-title",
          {
            x: -100,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".sec3-right-panel",
          {
            x: 80,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        );
    },
    { scope: SectionThreeRef }
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === frontendDev.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? frontendDev.length - 1 : prev - 1));
  };

  const currentData = frontendDev[currentIndex];

  return (
    <section
      ref={SectionThreeRef}
      className={`w-full min-h-screen ${
        isdark ? "bg-[#0f172a]" : "bg-[#f5f6fb]"
      }`}
    >
      <div
        className={`w-[96%] min-h-screen m-auto py-4 px-4 sm:px-6 lg:px-10 rounded-4xl flex flex-col
    ${isdark ? "bg-[#323a4b] text-white" : "bg-white text-gray-800"}`}
      >
        <Navbar isdark={isdark} />

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 flex-1">
          <LeftPanel
            currentData={currentData}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
          <RightPanel currentData={currentData} />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
