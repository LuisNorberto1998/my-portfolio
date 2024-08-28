"use client";

import "./Home.css";
import Image from "next/image";

import { Typewriter } from "react-simple-typewriter";

import { useEffect, useState } from "react";
import Github from "../../../public/components/github";
import Linkedin from "../../../public/components/linkedin";
import DownloadFile from "../../../public/components/download_doc";

const Home = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    const [cssVariables, setCssVariables] = useState<{ whiteColor: string; gradientColorText: string }>({
        whiteColor: "#FFFFFF",
        gradientColorText: "#9747FF",
    });

    useEffect(() => {
        // Obtener variables CSS después de montar el componente
        const root = document.documentElement;
        setCssVariables({
            whiteColor: getComputedStyle(root).getPropertyValue("--white-color").trim(),
            gradientColorText: getComputedStyle(root).getPropertyValue("--gradient-color-text").trim(),
        });
    }, []);

    const technologies = [
        { code: "0", icon: <Github width={52.5} height={55} fill={hovered === "Github" ? cssVariables.gradientColorText : cssVariables.whiteColor} />, name: "Github" },
        { code: "1", icon: <Linkedin width={56} height={60} fill={hovered === "Linkedin" ? cssVariables.gradientColorText : cssVariables.whiteColor} />, name: "Linkedin" },
        // { code: "2", icon: <DownloadFile width={60} height={65} fill={hovered === "DownloadFile" ? cssVariables.gradientColorText : cssVariables.whiteColor} />, name: "DownloadFile" },
    ];

    return (
        <div id="inicio">
            <div className="card-home">
                <div className="card-home-image">
                    <Image src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" width={1000} height={1000} alt="Image profile" />

                    <div className="card-home-social">
                        {technologies.map((tech) => (
                            <button key={tech.code} className="btn-icon-wrapper" onMouseEnter={() => setHovered(tech.name)} onMouseLeave={() => setHovered(null)}>
                                {tech.icon}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-home-text">
                        <h3 className="gradient-text-inverse">Soy, Norberto</h3>
                        <h1 className="gradient-text">
                            <Typewriter words={["Front End Developer", "Web Developer", "Fullstack Developer"]} loop={false} typeSpeed={100} deleteSpeed={100} delaySpeed={1000} />
                            <span className="typewriter-cursor">|</span>
                        </h1>
                        <h5>
                            Apasionado por la programación y la comida, no soy
                            <br />
                            un <strong className="strong-text">robot</strong>, inquieto, con ganas de aprender <br />
                            constantemente y tomar <strong className="strong-text">vino</strong>.
                        </h5>
                    </div>
                    <div className="card-form">
                        <div className="input-wrapper">
                            <input className="ipnut-email" type="email" placeholder="luis_norberto1998@hotmail.com" disabled={true} />
                            <span className="material-symbols-outlined icon-email">mail</span>
                        </div>
                        <button className="btn-icon">
                            <span className="material-symbols-outlined icon">send</span>
                        </button>
                        <button className="btn-icon">
                            <span className="material-symbols-outlined icon">content_copy</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
