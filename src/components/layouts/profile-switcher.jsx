'use client'
import { useState } from "react";

export default function ProfileSwitcher() {
    const [active, setActive] = useState(0); // 0 = Development, 1 = Designer

    const toggle = (index) => {
        setActive(index);
    };

    return (
        <div className="fixed top-5 w-full flex items-center justify-center">
            <div className="w-[23%] h-18 bg-[var(--primary)]/5 backdrop-blur-md border-1 border-black/10 rounded-full relative text-2xl text-[var(--black)]">
                {/* sliding indicator */}
                <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-full w-1/2 bg-[var(--black)] rounded-full transition-transform duration-300 ease-out"
                    style={{ transform: active === 1 ? "translateX(100%)" : "translateX(0%)" }}
                />

                <div className="relative z-10 flex h-full">
                    <button
                        type="button"
                        onClick={() => toggle(0)}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle(0)}
                        aria-pressed={active === 0}
                        className={`w-1/2 h-full rounded-full flex items-center justify-center font-thin text-xl transition-colors duration-200 cursor-pointer ${active === 0 ? "text-[var(--primary)]" : "text-[var(--black)]"
                            }`}
                    >
                        Developer
                    </button>

                    <button
                        type="button"
                        onClick={() => toggle(1)}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle(1)}
                        aria-pressed={active === 1}
                        className={`w-1/2 h-full rounded-full flex items-center justify-center font-thin text-xl transition-colors duration-200  cursor-pointer ${active === 1 ? "text-[var(--primary)]" : "text-[var(--black)]"
                            }`}
                    >
                        Designer
                    </button>
                </div>
            </div>
        </div>
    );
}