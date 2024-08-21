"use client";

import "./Technologies.css";

import Angular from "../../../public/components/angular";
import Flutter from "../../../public/components/flutter";
import Java from "../../../public/components/java";
import Icon from "../../../public/components/react";

import useMousePosition from "@/utils/mousePosition";

import { Data } from "@/types/modalShared";

const TechnologiesData: React.FC<Data> = ({icon, name, code}) => {
    const { position, handleMouseMove } = useMousePosition(`container-icon-${code}`);

    return (
        <div id={`container-icon-${code}`}>
            <div className="container-list grad relative overflow-hidden duration-700 rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600" onMouseMove={handleMouseMove}>
                {icon}
                <h3 className="gradient-text">{name}</h3>
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
    const technologies: Data[] = [
        { code: "0", icon: <Angular width={52.5} height={55} fill="#9747FF" />, name: "Angular" },
        { code: "3", icon: <Icon width={52.5} height={55} fill="#9747FF" />, name: "React" },
        { code: "2", icon: <Java width={52.5} height={55} fill="#9747FF" />, name: "Java" },
        { code: "1", icon: <Flutter width={52.5} height={55} fill="#9747FF" />, name: "Flutter" },
    ];

    return (
        <div id="tecnologias" className="technologies-card">
            <div className="title-card">
                <h1 className="gradient-text-inverse">Tecnologias</h1>
            </div>
            <div className="list-technologies">
                {technologies.map((technology) => (
                    <TechnologiesData key={"technology-data" + technology.code} icon={technology.icon} code={technology.code} name={technology.name} ></TechnologiesData>
                ))}
            </div>
        </div>
    );
}
