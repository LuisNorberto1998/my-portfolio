"use client";

import "./Home.css";
import { useEffect, useRef, useState } from "react";

import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";

import Image from "next/image";

import Github from "../../../public/components/github";
import Linkedin from "../../../public/components/linkedin";
import Tooltip from "@/shared/tooltip/Tooltip";

const Home = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);

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
        { code: "0", url: "https://github.com/LuisNorberto1998", icon: <Github width={52.5} height={55} fill={hovered === "Github" ? cssVariables.gradientColorText : cssVariables.whiteColor} />, name: "Github" },
        { code: "1", url: "https://www.linkedin.com/in/luis-norberto-paloma-rodriguez/", icon: <Linkedin width={56} height={60} fill={hovered === "Linkedin" ? cssVariables.gradientColorText : cssVariables.whiteColor} />, name: "Linkedin" },
    ];

    const handleClick = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const handleCopyEmail = async () => {
        if (emailInputRef.current) {
            try {
                await navigator.clipboard.writeText(emailInputRef.current.value);
                toast.success("Correo copiado al portapapeles");
            } catch (err) {
                toast.error("Error al copiar al portapapeles");
            }
        }
    };

    const handleSendEmail = () => {
        const email = emailInputRef.current ? emailInputRef.current.value : "";
        window.location.href = `mailto:${email}`;
    };

    return (
        <div id="inicio">
            <div className="card-home">
                <div className="card-home-image">
                    <Image src="/images/norberto.jpeg" width={1000} height={1000} alt="Image profile" />

                    <div className="card-home-social">
                        {technologies.map((tech) => (
                            <button key={tech.code} onClick={() => handleClick(tech.url)} className="btn-icon-wrapper" onMouseEnter={() => setHovered(tech.name)} onMouseLeave={() => setHovered(null)}>
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
                            <input className="ipnut-email" type="email" ref={emailInputRef} value={"luis_norberto1998@hotmail.com"} placeholder="luis_norberto1998@hotmail.com" disabled={true} />
                            <span className="material-symbols-outlined icon-email">mail</span>
                        </div>

                        <div className="buttons-home">
                            <Tooltip message="Enviar correo">
                                <button onClick={handleSendEmail} className="btn-icon">
                                    <span className="material-symbols-outlined icon">send</span>
                                </button>
                            </Tooltip>

                            <Tooltip message="Copiar correo">
                                <button onClick={handleCopyEmail} className="btn-icon">
                                    <span className="material-symbols-outlined icon">content_copy</span>
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
