'use client';
import Image from "next/image";
import { useState } from 'react';
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

export default function Navbar() {
  const scrollRef = useHorizontalScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Navigation items
  const navItems = [
    { link: "#about", text: "About Me" },
    { link: "#what-i-do", text: "What I Do" },
    { link: "#skills", text: "Skills" },
    { link: "#", text: "Experiences" },
    { link: "#", text: "Portfolio" },
    { link: "#", text: "Testimonials" },
  ];

  const handleOpenMenu = () => {
    setMobileOpen(true);
  };

  const handleCloseMenu = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setMobileOpen(false);
      setIsAnimating(false);
    }, 400);
  };

  const handleNavClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setMobileOpen(false);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      <nav>
        {/* Scroll Indicator */}
        <div className="hidden md:flex fixed bottom-5 w-full items-center justify-center z-50">
          <a href="#">
            <div className="group w-24 h-24 bg-[var(--black)] hover:bg-[var(--primary)] transition-all hover:border-1 hover:border-[var(--black)] rounded-full flex items-center justify-center mr-3">
              <Image
                src={"/arrow.svg"}
                width={35}
                height={0}
                alt="scroll indicator arrow vector graphic"
                className="group-hover:invert"
              />
            </div>
          </a>

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
        </div>

        {/* Mobile Navigation Bar */}
        {mobileOpen ? (
          <div className="md:hidden fixed left-5 right-5 bottom-5 h-18 flex items-center justify-center z-50">
            <button
              type="button"
              onClick={handleCloseMenu}
              aria-expanded={mobileOpen}
              className="w-full h-full bg-red-700 rounded-full z-50 text-xl font-light text-white"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div className="md:hidden fixed left-5 right-5 bottom-5 h-18 flex items-center justify-center z-50">
            <button
              type="button"
              onClick={handleOpenMenu}
              aria-expanded={mobileOpen}
              className="w-full h-full bg-[var(--primary)]/5 border-1 border-black/10 backdrop-blur-md rounded-full z-50 text-xl font-light"
            >
              Menu
            </button>
          </div>
        )}

        {/* Mobile expanded panel (fills screen) */}
        {mobileOpen && (
          <div className={`fixed z-40 gap-2.5 flex flex-col md:hidden left-5 right-5 top-5 transform transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            } ${mobileOpen && !isAnimating ? 'animate-fadeIn' : ''}`}>
            {navItems.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className={`select-none transform transition-all duration-300 ease-out ${mobileOpen && !isAnimating
                  ? 'translate-x-0 opacity-100'
                  : isAnimating
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                  }`}
                style={{
                  transitionDelay: mobileOpen && !isAnimating
                    ? `${index * 100}ms`
                    : isAnimating
                      ? `${(navItems.length - 1 - index) * 50}ms`
                      : '0ms'
                }}
                onClick={handleNavClick}
              >
                <div className="w-full h-24 bg-[var(--primary)]/5 border-1 border-black/10 backdrop-blur-md rounded-full flex items-center justify-center text-3xl">
                  <p className="mix-blend-exclusion">{item.text.toUpperCase()}</p>
                </div>
              </a>
            ))}

            <a
              href="#"
              className={`select-none transform transition-all duration-300 ease-out ${mobileOpen && !isAnimating
                ? 'translate-x-0 opacity-100'
                : isAnimating
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
                }`}
              onClick={handleNavClick}
            >
              <div className="w-full h-24 bg-[var(--primary)] border-1 border-black rounded-full flex items-center justify-center text-3xl text-[var(--black)]">
                Let's Talk
              </div>
            </a>
          </div>
        )}
      </nav>
    </>
  );
}