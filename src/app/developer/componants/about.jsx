import Image from "next/image";

export default function DeveloperAbout() {
    return (
    <section id="about" className="w-full h-auto lg:h-screen py-20 md:py-28 lg:py-0 flex flex-col items-start justify-center px-5 md:px-16 lg:px-28 border-b-2">
            <div className="w-full flex flex-col lg:flex-row gap-10">
                <div className="lg:w-[65%] md:gap-10 flex flex-col">
                    <div className="flex items-center gap-3 text-xl mb-2.5 md:mb-0">
                        <div className="w-3 h-3 bg-[var(--black)] rounded-full"></div> About Me
                    </div>
                    <p className="text-2xl md:text-[32px] text-justify leading-9 md:leading-normal mb-10 md:mb-0">I have 3 years of experience as an AI/ML engineer, software developer, and workflow automation. My work includes deep learning and computer vision projects, as well as building scalable software and automated workflows. I enjoy creating practical, AI-driven solutions that improve efficiency and deliver real value.</p>

                    <div className="w-full h-[2px] bg-black rounded-full mb-10 md:mb-0"></div>

                    <div className="w-full flex justify-between items-center mb-10 md:mb-0">
                        <div className="flex flex-col">
                            <p className="flex items-baseline text-3xl"><b className="text-4xl md:text-6xl font-medium">70</b>+</p>
                            <p className="text-sm md:text-[20px]">Satisfied Clients</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="flex items-baseline text-3xl"><b className="text-4xl md:text-6xl font-medium">3</b>+</p>
                            <p className="text-sm md:text-[20px]">Years Experience</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="flex items-baseline text-3xl"><b className="text-4xl md:text-6xl font-medium">4.8</b></p>
                            <p className="text-sm md:text-[20px]">Average Raiting</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[35%] flex flex-col justify-end">
                    <div className="w-full h-96 md:h-[500px] lg:h-full relative overflow-hidden">
                        {/* primary colored block at the bottom (behind image) */}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[var(--primary)]" />

                        {/* image fills container, uses object-bottom so image bottom aligns to container bottom */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/my-picture.png"
                                alt="Waleed Ashraf Picture"
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