'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

export default function Navbar() {
  const scrollRef = useHorizontalScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Navigation items
  const navItems = [
    { link: "#about", text: "About Me" },
    { link: "#what-i-do", text: "What I Do" },
    { link: "#skills", text: "Skills" },
    { link: "#", text: "Experiences" },
    { link: "#", text: "Portfolio" },
    { link: "#", text: "Testimonials" },
  ];

  // Function to check which section is currently active
  const checkActiveSection = () => {
    const sections = navItems.map(item => item.link.replace('#', ''));
    let currentSection = '';

    sections.forEach(sectionId => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section active if it's in the upper half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = `#${sectionId}`;
          }
        }
      }
    });

    setActiveSection(currentSection);
  };

  // Set up scroll event listener for active section detection
  useEffect(() => {
    // Initial check
    checkActiveSection();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkActiveSection);
    
    return () => {
      window.removeEventListener('scroll', checkActiveSection);
    };
  }, []);

  // Check scroll position and update arrow visibility
  const checkArrows = () => {
    const element = scrollRef.current;
    if (element) {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      
      // Debug logging (remove in production)
      console.log('Scroll check:', { scrollLeft, scrollWidth, clientWidth, diff: scrollWidth - clientWidth });
      
      // Show left arrow if we can scroll left (not at the beginning)
      setShowLeftArrow(scrollLeft > 5); // Small threshold to account for rounding
      
      // Show right arrow if we can scroll right (not at the end)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5); // Small threshold
    }
  };

  // Scroll functions
  const scrollLeft = () => {
    const element = scrollRef.current;
    if (element) {
      element.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const element = scrollRef.current;
    if (element) {
      element.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Set up scroll event listener and initial check
  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      // Initial check
      checkArrows();
      
      // Add scroll event listener
      element.addEventListener('scroll', checkArrows);
      
      // Check on resize
      window.addEventListener('resize', checkArrows);
      
      return () => {
        element.removeEventListener('scroll', checkArrows);
        window.removeEventListener('resize', checkArrows);
      };
    }
  }, []);

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

  const handleNavClick = (link) => {
    // Update active section immediately on click
    setActiveSection(link);
    
    // Close mobile menu if open
    if (mobileOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setMobileOpen(false);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Helper function to determine if a nav item is active
  const isActiveItem = (link) => {
    return activeSection === link;
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
        .scroll-arrow {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .scroll-arrow:hover {
          transform: scale(1.1);
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

          {/* Navigation Items with Overlay Arrows */}
          <div className="relative w-[45%] mr-3">
            {/* Left Arrow Overlay */}
            {showLeftArrow && (
              <button
                onClick={scrollLeft}
                className="scroll-arrow absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r backdrop-blur-xs rounded-full flex items-center justify-center z-10 cursor-pointer"
              >
                <Image
                  src={"/navigation-arrow.svg"}
                  width={10}
                  height={0}
                  alt="scroll left"
                  className="rotate-180"
                />
              </button>
            )}

            {/* Navigation Items Container */}
            <div ref={scrollRef} className="flex overflow-hidden rounded-full">
              {navItems.map((item, index) => (
                <a 
                  href={item.link} 
                  key={index} 
                  className="flex-shrink-0 select-none mr-3"
                  onClick={() => handleNavClick(item.link)}
                >
                  <div className={`group h-22 w-max transition-all rounded-full flex items-center justify-center text-2xl px-8 border-1 border-black/10 backdrop-blur-md ${
                    isActiveItem(item.link) 
                      ? 'bg-[var(--black)] text-[var(--primary)]' 
                      : 'bg-[var(--primary)]/5 hover:bg-[var(--black)] text-[var(--black)] hover:text-[var(--primary)]'
                  }`}>
                    {item.text}
                  </div>
                </a>
              ))}
            </div>

            {/* Right Arrow Overlay */}
            {showRightArrow && (
              <button
                onClick={scrollRight}
                className="scroll-arrow absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l backdrop-blur-xs rounded-full flex items-center justify-center z-10 cursor-pointer"
              >
                <Image
                  src={"/navigation-arrow.svg"}
                  width={10}
                  height={0}
                  alt="scroll right"
                /> 
              </button>
            )}
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
          <div className={`fixed z-40 gap-2.5 flex flex-col backdrop-blur-sm md:hidden left-0 right-0 p-5 top-0 bottom-0 transform transition-all duration-700 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
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
                onClick={() => handleNavClick(item.link)}
              >
                <div className={`w-full h-24 rounded-full flex items-center justify-center text-3xl ${
                  isActiveItem(item.link)
                    ? 'bg-[var(--primary)] text-[var(--black)] border-1 border-black'
                    : 'bg-[var(--black)] text-[var(--primary)]'
                }`}>
                  {item.text.toUpperCase()}
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
              onClick={() => handleNavClick('#')}
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