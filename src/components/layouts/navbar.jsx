'use client';
import Image from "next/image";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

export default function Navbar() {
  const scrollRef = useHorizontalScroll();
  // Navigation items
  const navItems = [
    { link: "#about", text: "About Me" },
    { link: "#what-i-do", text: "What I Do" },
    { link: "#", text: "Skills" },
    { link: "#", text: "Experiences" },
    { link: "#", text: "Portfolio" },
    { link: "#", text: "Testimonials" },
  ];

  return (
    <nav className="fixed bottom-5 w-screen flex items-center justify-center z-50">
      {/* Scroll Indicator */}
      <a href="#"><div className="group w-24 h-24 bg-[var(--black)] hover:bg-[var(--primary)] transition-all hover:border-1 hover:border-[var(--black)] rounded-full flex items-center justify-center mr-3">
        <Image
          src={"/arrow.svg"}
          width={35}
          height={0}
          alt="scroll indicator arrow vector graphic"
          className="group-hover:invert"
        />
      </div></a>

      {/* Navigation Items */}
      <div ref={scrollRef} className="w-[45%] flex overflow-hidden rounded-full mr-3">
        {navItems.map((item, index) => (
          <a href={item.link} key={index} className="flex-shrink-0 select-none mr-3">
            <div className="group h-22 w-max bg-[var(--primary)]/5 hover:bg-[var(--black)] transition-all rounded-full flex items-center justify-center text-2xl text-[var(--black)] hover:text-[var(--primary)] px-8 border-1 border-black/10 backdrop-blur-md">
              {item.text}
            </div>
          </a>
        ))}
      </div>

      {/* Let's talk CTA */}
      <a href="#">
        <div className="group h-24 w-max bg-[var(--primary)] hover:bg-[var(--black)] transition-all rounded-full flex items-center justify-center text-2xl text-[var(--black)] hover:text-[var(--primary)] px-10 border-1 border-[var(--black)] backdrop-blur-md mr-3">
          Let's Talk
        </div>
      </a>
    </nav>
  );
}