import Image from "next/image";

export default function SkillCard(props) {
    // Calculate mobile width (30% smaller)
    const mobileWidth = Math.round((props.width ?? 125) * 0.7);
    
    return (
        <div className="group w-full bg-white border-1 relative overflow-visible mb-2.5">
            {/* sticker can overflow the card - responsive sizing */}
            <Image 
                src={props.sticker} 
                width={props.width ?? 125} 
                height={0} 
                alt="" 
                className="absolute -top-8 md:-top-5 z-20 -right-5 md:-right-8 pointer-events-none md:w-auto"
                style={{
                    width: `${mobileWidth}px`,
                }}
                sizes={`(max-width: 768px) ${mobileWidth}px, ${props.width ?? 125}px`}
            />

            {/* inner wrapper clips the overlay so it doesn't show outside the card */}
            <div className="relative z-10 overflow-hidden">
                <div aria-hidden="true" className="absolute inset-0 bg-[var(--primary)] -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 z-0 pointer-events-none" />

                <div className="relative z-10 p-5">
                    <h1 className="text-2xl mb:text-[32px] font-medium mb-2.5">{props.title}</h1>
                    <p className="text-justify text-[16px] mb:text-lg">{props.description}</p>
                </div>
            </div>
        </div>
    );
}