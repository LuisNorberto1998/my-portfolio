import React from 'react';

import './carrouselData.css';

import useMousePosition from '@/utils/mousePosition';
import Image from 'next/image';

import { DataCarrouselProps } from '@/types/carrousel';


const DataCarrousel: React.FC<DataCarrouselProps> = ({ project, openModal }) => {
    const { position, handleMouseMove } = useMousePosition(project.key);

    return (
        <div key={project.key} className="card-body relative overflow-hidden duration-700 rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600" onMouseMove={handleMouseMove} onClick={() => openModal(project)}>
            <Image width={1000} height={1000} src={project.img} alt={`${project.name} image`} />
            <div className="gradient-text title">{project.name}</div>
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