import Image from "next/image";

export default function WhatIDoCard(props) {
return (
        <div className="w-full h-auto bg-white hover:bg-[var(--primary)] backdrop-blur-md border-1 border-[var(--black)] p-6 flex flex-col justify-between transition-all duration-500 ease-out">
            <Image src={props.icon} width={50} height={50} alt="" className="mb-12"/>
            <h2 className="text-[28px] font-medium mb-3">{props.title}</h2>
            <p className="text-lg flex-grow text-justify">{props.description}</p>
        </div>
    );
}