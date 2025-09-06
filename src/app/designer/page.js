import ProfileSwitcher from "@/components/layouts/profile-switcher";

export default function Designer() {
    return (
        <main id="app" className="w-screen h-screen flex items-center justify-center absolute bg-[url('/noise-filter.svg')] bg-fixed bg-cover bg-center -z-10 scroll-smooth">
            <ProfileSwitcher />
            <h1 className="text-4xl text-[var(--black)] font-bold">Designer Profile Coming Soon!</h1>
        </main>
    );
}