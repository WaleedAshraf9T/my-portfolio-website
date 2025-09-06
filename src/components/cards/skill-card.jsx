import Image from "next/image";

export default function SkillCard(props) {
    return (
        <div className="group w-full bg-white border-1 relative overflow-visible mb-2.5">
            {/* sticker can overflow the card */}
            <Image src={props.sticker} width={props.width ?? 125} height={0} alt="Python Logo" className="absolute -top-8 z-50 -right-10 pointer-events-none" />

            {/* inner wrapper clips the overlay so it doesn't show outside the card */}
            <div className="relative z-10 overflow-hidden">
                <div aria-hidden="true" className="absolute inset-0 bg-[var(--primary)] -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 z-0 pointer-events-none" />

                <div className="relative z-10 p-5">
                    <h1 className="text-[32px] font-medium mb-2.5">{props.title}</h1>
                    <p className="text-justify text-lg">{props.description}</p>
                </div>
            </div>
        </div>
    );
}