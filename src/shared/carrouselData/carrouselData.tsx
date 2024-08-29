import React from "react";

import "./carrouselData.css";

import useMousePosition from "@/utils/mousePosition";
import Image from "next/image";

import { GradientDataProps } from "@/types/gradient";

const DataCarrousel: React.FC<GradientDataProps> = ({ data, openModal }) => {
    const { position, handleMouseMove } = useMousePosition(data.code);

    return (
        <div key={"carrousel-data" + data.code} className="card-body relative overflow-hidden duration-700 rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600" onMouseMove={handleMouseMove} onClick={() => openModal(data)}>
            <Image width={1000} height={1000} src={data.img ?? "/images/no-image.png"} alt={`${data.name} image`} />
            <div className="gradient-text title">{data.name}</div>
            <div
                className="absolute bg-gradient-radial rounded-full opacity-30"
                style={{
                    left: `${position.x - 100}px`,
                    top: `${position.y - 100}px`,
                    width: "200px",
                    height: "200px",
                }}
            />
        </div>
    );
};

export default DataCarrousel;
