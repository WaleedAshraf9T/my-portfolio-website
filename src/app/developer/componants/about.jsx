import Image from "next/image";

export default function DeveloperAbout() {
    return (
        <section id="about" className="w-full h-screen flex flex-col items justify-center px-28 border-b-2">
            <div className="flex items-center gap-3 text-xl mb-10">
                <div className="w-3 h-3 bg-[var(--black)] rounded-full"></div> About Me
            </div>
            <div className="w-full flex gap-10">
                <div className="w-[65%] gap-10 flex flex-col">
                    <p className="text-[32px] text-justify leading-14">I have 3 years of experience as an AI/ML engineer, software developer, and workflow automation. My work includes deep learning and computer vision projects, as well as building scalable software and automated workflows. I enjoy creating practical, AI-driven solutions that improve efficiency and deliver real value.</p>

                    <div className="w-full h-[2px] bg-black rounded-full"></div>

                    <div className="w-full flex justify-between items-center">
                        <div className="flex flex-col">
                            <p className="flex items-baseline text-3xl"><b className="text-6xl font-medium">70</b>+</p>
                            <p className="text-[20px]">Satisfied Clients</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="flex items-baseline text-3xl"><b className="text-6xl font-medium">3</b>+</p>
                            <p className="text-[20px]">Years Experience</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="flex items-baseline text-3xl"><b className="text-6xl font-medium">4.8</b></p>
                            <p className="text-[20px]">Average Raiting</p>
                        </div>
                    </div>
                </div>
                <div className="w-[35%] h-full flex flex-col justify-end">
                    <div className="w-full h-full relative overflow-hidden">
                        {/* primary colored block at the bottom (behind image) */}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[var(--primary)]" />

                        {/* image fills container, uses object-bottom so image bottom aligns to container bottom */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/my-picture.png"
                                alt="Waleed Ashraf"
                                fill
                                className="object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}