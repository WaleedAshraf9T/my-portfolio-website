import Image from "next/image";
import WhatIDoCard from "@/components/cards/what-i-do-card";

export default function DeveloperWhatIDo() {
    const whatIDoData = [
        {
            title: "AI/ML Engineer",
            description: "Expert AI/ML engineer creating cutting-edge machine learning models, deep learning solutions, and computer vision systems for intelligent business applications.",
            icon: "/ai-ml-icon.png"
        },
        {
            title: "Workflows Automation",
            description: "Custom workflow automation solutions that eliminate manual processes, minimize human errors, and maximize operational efficiency for businesses.",
            icon: "/automation-icon.png"
        },
        {
            title: "Web App Development",
            description: "Full-stack web application development using modern JavaScript frameworks, ensuring responsive design, robust security, and optimal performance.",
            icon: "/web-dev-icon.png"
        },
        {
            title: "Mobile App Development",
            description: "Professional iOS and Android app development with React Native and Flutter, delivering exceptional user experiences and cross-platform compatibility.",
            icon: "/mobile-dev-icon.png"
        },
        {
            title: "Deep Learning Apps",
            description: "Advanced neural network applications for image recognition, natural language processing, predictive analytics, and AI-powered business intelligence solutions.",
            icon: "/dl-icon.png"
        }
    ];
    return (
        <section id="what-i-do" className="w-full h-[100vh] pb-[7vh] flex flex-col justify-center  px-28 border-b-2">
            <div className="flex items-center gap-3 text-xl mb-10">
                <div className="w-3 h-3 bg-[var(--black)] rounded-full"></div> What I Do
            </div>

            <div className="w-full grid grid-cols-3 gap-5">
                {whatIDoData.map((item, index) => (
                    <WhatIDoCard key={index} title={item.title} icon={item.icon} description={item.description} />
                ))}

                <div className="w-full h-auto bg-[var(--primary)] backdrop-blur-md border-1 border-[var(--black)] p-6 flex flex-col justify-between transition-all duration-500">
                    <div>
                        <p className="text-xl mb-2 flex-grow text-justify">something new in the market?</p>
                        <h2 className="text-[28px] font-medium mb-3">Let me know, I really enjoy learning new things</h2>
                    </div>

                    <a href="#">
                        <button className="group w-[70%] h-16 bg-[var(--black)] rounded-full hover:bg-[var(--primary)] border-1 border-[var(--black)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5">
                            <p className="text-[var(--primary)] text-[22px] font-light group-hover:invert">Give Me Feedback</p>
                            <Image
                                src={"/arrow.svg"}
                                width={18}
                                height={0}
                                alt="scroll indicator arrow vector graphic"
                                className="group-hover:invert -rotate-90"
                            />
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}