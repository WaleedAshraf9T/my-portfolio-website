"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
    const titles = ["AI/ML Engineer", "Software Developer", "Workflow Automator"];
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    const typingIntervalRef = useRef(null);
    const pauseTimeoutRef = useRef(null);
    const cursorTimerRef = useRef(null);

    // Start blinking cursor
    useEffect(() => {
        cursorTimerRef.current = setInterval(() => {
            setCursorVisible((v) => !v);
        }, 500);
        return () => clearInterval(cursorTimerRef.current);
    }, []);

    // initial type on mount
    useEffect(() => {
        startTyping(titles[index]);
        return () => {
            clearInterval(typingIntervalRef.current);
            clearTimeout(pauseTimeoutRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // When index changes, start typing new title
    useEffect(() => {
        startTyping(titles[index]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    function startTyping(target) {
        clearInterval(typingIntervalRef.current);
        clearTimeout(pauseTimeoutRef.current);
        setDisplayText("");

        // total typing window (ms) - leave small pause at end
        const totalTypingMs = 2400;
        const perChar = Math.max(20, Math.floor(totalTypingMs / Math.max(1, target.length)));
        let pos = 0;

        typingIntervalRef.current = setInterval(() => {
            pos += 1;
            setDisplayText(target.slice(0, pos));
            if (pos >= target.length) {
                clearInterval(typingIntervalRef.current);
                // after typing completes, pause for 3s before advancing
                pauseTimeoutRef.current = setTimeout(() => {
                    setIndex((i) => (i + 1) % titles.length);
                }, 3000);
            }
        }, perChar);
    }

    return (
        <section className="w-full h-screen flex flex-col justify-center px-28 border-b-2">
            <h2 className="text-3xl">
                Hey! It's <strong className="font-medium">Waleed Ashraf</strong>, {index === 0 ? "an" : "a"}
            </h2>
            <h1 className="text-9xl font-['Orbit'] mb-12">
                {displayText}
                <span className={`ml-1 inline-block w-2 ${cursorVisible ? "bg-[var(--black)]" : "bg-transparent"}`}>&nbsp;</span>
            </h1>
            <p className="text-[20px] text-justify">
                I’m an <strong>AI/ML Engineer</strong>, <strong>Software Developer</strong>, and <strong>Workflow Automation Specialist</strong> with a focus on creating intelligent, data-driven solutions that help businesses work smarter. I combine expertise in&nbsp;machine learning, artificial intelligence, software development, and process automation&nbsp;to design systems that reduce manual effort, improve efficiency, and support innovation.
            </p>
            <p className="text-[20px] text-justify mt-4">
                Whether it’s building&nbsp;custom machine learning models, developing&nbsp;scalable software applications, or automating complex workflows, I deliver solutions that solve real challenges and create measurable impact.
            </p>

            <div className="w-full flex items-center justify-between mt-16">
                <div className="flex flex-col">
                    <p className="flex items-baseline text-3xl"><b className="text-6xl font-medium">80</b>+</p>
                    <p className="text-[20px]">Successful Projects</p>
                </div>

                <a href="#" className="flex items-center gap-2.5">
                    <Image src={'/github.svg'} width={30} height={0} alt="github" /> Github
                </a>
            </div>
        </section>
    );
}