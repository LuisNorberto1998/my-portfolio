"use client";

import "./Technologies.css";

import Angular from "../../../public/components/angular";
import Flutter from "../../../public/components/flutter";
import Java from "../../../public/components/java";
import Icon from "../../../public/components/react";

import useMousePosition from "@/utils/mousePosition";

import { Data } from "@/types/modalShared";

const TechnologiesData: React.FC<Data> = (data) => {
    const { position, handleMouseMove } = useMousePosition(`container-icon-${data.key}`);

    return (
        <div id={`container-icon-${data.key}`} key={data.key}>
            <div className="container-list grad relative overflow-hidden duration-700 rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600" onMouseMove={handleMouseMove}>
                {data.icon}
                <h3 className="gradient-text">{data.name}</h3>
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
        </div>
    );
}

export default function Technologies() {
    const technologies = [
        { key: "0", icon: <Angular width={52.5} height={55} fill="#9747FF" />, name: "Angular" },
        { key: "3", icon: <Icon width={52.5} height={55} fill="#9747FF" />, name: "React" },
        { key: "2", icon: <Java width={52.5} height={55} fill="#9747FF" />, name: "Java" },
        { key: "1", icon: <Flutter width={52.5} height={55} fill="#9747FF" />, name: "Flutter" },
    ];

    return (
        <div id="tecnologias" className="technologies-card">
            <div className="title-card">
                <h1 className="gradient-text-inverse">Tecnologias</h1>
            </div>
            <div className="list-technologies">
                {technologies.map((technologie) => (
                    <TechnologiesData icon={technologie.icon} key={technologie.key} name={technologie.name} ></TechnologiesData>
                ))}
            </div>
        </div>
    );
}
