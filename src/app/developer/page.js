import Navbar from "@/components/layouts/navbar";
import Image from "next/image";
import HeroSection from "./componants/hero-section";
import ProfileSwitcher from "@/components/layouts/profile-switcher";

export default function Developer() {
  return (
    <main id="app" className="w-screen h-screen relative">
      {/* Background Noise Filter */}
      <Image src="/noise-filter.svg" alt="noise background" fill className="object-cover -z-10" />
      <ProfileSwitcher />
      <HeroSection />
      <Navbar />
    </main>
  );
}