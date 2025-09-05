import Navbar from "@/components/layouts/navbar";
import DeveloperHeroSection from "./componants/hero-section";
import DeveloperAbout from "./componants/about";
import ProfileSwitcher from "@/components/layouts/profile-switcher";

export default function Developer() {
  return (
    <main id="app" className="w-screen absolute bg-[url('/noise-filter.svg')] bg-fixed bg-cover bg-center -z-10 scroll-smooth">
      <ProfileSwitcher />
      <DeveloperHeroSection />
      <DeveloperAbout />
      <Navbar />
    </main>
  );
}