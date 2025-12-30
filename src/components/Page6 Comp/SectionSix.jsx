import React, { useState } from "react";
import SectionHeader from "./sectionSix/SectionHeader";
import TestimonialCard from "./sectionSix/TestimonialCard";
import ImageProfileCard from "./sectionSix/ImageProfileCard";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionSix = ({ isdark }) => {
  const testimonials = [
    {
      id: 1,
      count: "1/10",
      quote:
        "A creative Web Developer who transforms ideas into fast, responsive, and user-focused digital experiences.",
      rating: 4.5,
      role: "Creative Web Developer",
      description: "Modern UI specialist",
      image:
        "https://plus.unsplash.com/premium_photo-1661675436186-dc0fe0eba15a",
      badge1: "Professional Trainer",
      badge2: "UI Developer",
      accepted: "99 Accepted",
    },
    {
      id: 2,
      count: "2/10",
      quote:
        "Clean code and thoughtful design combined to deliver seamless frontend experiences.",
      rating: 5,
      role: "Frontend Engineer",
      description: "React & Tailwind Expert",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge1: "Top Rated",
      badge2: "React Developer",
      accepted: "120 Accepted",
    },
    {
      id: 3,
      count: "3/10",
      quote: "Focused on performance-driven and accessible web applications.",
      rating: 4,
      role: "UI Engineer",
      description: "Accessibility First",
      image:
        "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge1: "Verified",
      badge2: "Frontend Dev",
      accepted: "87 Accepted",
    },
    {
      id: 4,
      count: "4/10",
      quote:
        "Delivering scalable and maintainable frontend architectures with clean code.",
      rating: 4.8,
      role: "Senior Frontend Developer",
      description: "Scalable UI Systems",
      image:
        "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge1: "Expert Level",
      badge2: "UI Architect",
      accepted: "150 Accepted",
    },
    {
      id: 5,
      count: "5/10",
      quote:
        "Passionate about building intuitive user interfaces with modern frameworks.",
      rating: 4.2,
      role: "React Developer",
      description: "Component Driven UI",
      image:
        "https://plus.unsplash.com/premium_photo-1661488774517-94ecf6cc58ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge1: "Skilled",
      badge2: "React JS",
      accepted: "72 Accepted",
    },
    {
      id: 6,
      count: "6/10",
      quote:
        "Transforming design concepts into interactive and responsive web experiences.",
      rating: 4.6,
      role: "UI/UX Developer",
      description: "Design to Code",
      image:
        "https://plus.unsplash.com/premium_photo-1661583972209-4aa334e5e2b1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge1: "Creative Mind",
      badge2: "UI/UX",
      accepted: "110 Accepted",
    },
    {
      id: 7,
      count: "7/10",
      quote: "Focused on performance optimization and clean user interactions.",
      rating: 4.1,
      role: "Web Performance Engineer",
      description: "Speed & Optimization",
      image:
        "https://plus.unsplash.com/premium_photo-1661551917096-d17af8ce1ed4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge1: "Performance Pro",
      badge2: "Web Optimization",
      accepted: "65 Accepted",
    },
    {
      id: 8,
      count: "8/10",
      quote: "Building accessible and inclusive web solutions for all users.",
      rating: 4.9,
      role: "Accessibility Specialist",
      description: "Inclusive Design",
      image:
        "https://images.unsplash.com/photo-1533326021152-7ae7008635de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge1: "Accessibility Pro",
      badge2: "WCAG Expert",
      accepted: "140 Accepted",
    },
    {
      id: 9,
      count: "9/10",
      quote:
        "Creating interactive animations and micro-interactions for better UX.",
      rating: 4.3,
      role: "Frontend Animator",
      description: "GSAP Animations",
      image:
        "https://plus.unsplash.com/premium_photo-1661338834145-7d4376ceccf8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge1: "Animation Expert",
      badge2: "GSAP",
      accepted: "90 Accepted",
    },
    {
      id: 10,
      count: "10/10",
      quote:
        "Delivering pixel-perfect interfaces with attention to every detail.",
      rating: 5,
      role: "Pixel Perfect Developer",
      description: "Detail Oriented UI",
      image:
        "https://plus.unsplash.com/premium_photo-1664298858528-76f7e0bc3adf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge1: "Top Performer",
      badge2: "UI Precision",
      accepted: "200 Accepted",
    },
  ];

  const [CurrentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const CurrData = testimonials[CurrentIndex];

  const SectionSixRef = useRef();

useGSAP(
  () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: SectionSixRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".sec6-header", {
      y: -80,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        ".sec6-left-qoute",
        {
          x: -120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        ".sec6-image-card",
        {
          x: 120,
          scale: 0.85,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
  },
  { scope: SectionSixRef }
);


  return (
    <section
      ref={SectionSixRef}
      className={`w-full min-h-screen py-15 sm:py-8 lg:py-12 ${
        isdark ? "bg-[#0f172a]" : "bg-[#f5f6fb]"
      }`}
    >
      <div className="w-[96%] min-h-screen m-auto flex flex-col gap-6">
        <SectionHeader isdark={isdark} />

        <div
          className="
  w-full flex flex-col lg:flex-row
  gap-6 lg:gap-10
  flex-1
"
        >
          <TestimonialCard CurrData={CurrData} handleNext={handleNext} />
          <ImageProfileCard CurrData={CurrData} />
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
