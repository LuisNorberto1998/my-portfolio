'use client'
import React from "react";
import useMousePosition from "@/utils/mousePosition";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import "./Projects.css";


const Projects = () => {
    const projectData = [
        { key: "1", img: "images/citibanamex.png", name: "Citibanamex" },
        { key: "2", img: "images/gnp.png", name: "Portal Intermediarios" },
        { key: "3", img: "images/aforeweb.png", name: "AforeWeb" },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div id="proyectos" className="container-projects">
            <div className="projects">
                <div className="title-projects">
                    <h1 className="gradient-text">Proyectos</h1>
                </div>
                <div className="card-projects">
                    <Carousel
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        keyBoardControl={true}
                        customTransition="all 0.5s"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {projectData.map((project) => {
                            const { position, handleMouseMove } = useMousePosition(project.key);

                            return (
                                <div key={project.key} className="card-body relative overflow-hidden duration-700 rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600" onMouseMove={handleMouseMove}>
                                    <img src={project.img} alt={`${project.name} image`} />
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
                        })}
                    </Carousel>
                </div>
                <div className="footer-text-projects">
                    <h3 className="gradient-text">Mostrar todo <span className="material-symbols-outlined icon-email">arrow_forward</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Projects;
