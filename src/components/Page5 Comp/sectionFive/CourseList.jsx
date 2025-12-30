import gsap from "gsap";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Developer Course",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Frontend Development Mastery",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1170&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Backend Development Essentials",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1170&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "MERN Stack Professional Course",
      image:
        "https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=1170&auto=format&fit=crop",
    },
  ];

  const handleMouseMove = (e, img) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    gsap.to(img, {
      x: x - 140,
      y: y - 140,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleEnter = (img) => {
    gsap.to(img, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
      rotate: -4,
    });
  };

  const handleLeave = (img) => {
    gsap.to(img, {
      opacity: 0,
      scale: 0.95,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
   <div className="grow flex flex-col justify-evenly ">

      {courses.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onMove={handleMouseMove}
          onEnter={handleEnter}
          onLeave={handleLeave}
        />
      ))}
    </div>
  );
};

export default CourseList;
