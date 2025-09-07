'use client';
import Navbar from "@/components/layouts/navbar";
import DeveloperHeroSection from "./componants/hero-section";
import DeveloperAbout from "./componants/about";
import ProfileSwitcher from "@/components/layouts/profile-switcher";
import DeveloperWhatIDo from "./componants/what-i-do";
import DeveloperSkills from "./componants/skills";
import Lenis from '@studio-freight/lenis'

export default function Developer() {
  // Lenis smooth scrolling
  if (typeof window !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }
  return (
    <main id="app" className="w-screen absolute bg-[url('/noise-filter.svg')] bg-fixed bg-cover bg-center -z-10 scroll-smooth">
      <ProfileSwitcher />
      <DeveloperHeroSection />
      <DeveloperAbout />
      <DeveloperWhatIDo />
      {/* <DeveloperSkills /> */}
      <Navbar />
    </main>
  );
}