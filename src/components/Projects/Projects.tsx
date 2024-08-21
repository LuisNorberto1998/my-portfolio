"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import ModalShared from "../../shared/modal/modalShared";
import DataCarrousel from "@/shared/carrouselData/carrouselData";

import "react-multi-carousel/lib/styles.css";
import "./Projects.css";

import { useState } from "react";
import { projectData } from "@/mocks/projectMocks";

const Projects: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

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

    const openModal = (project: any) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <div id="proyectos" className="container-projects">
            <div className="projects">
                <div className="title-projects">
                    <h1 className="gradient-text">Proyectos</h1>
                </div>
                <div className="card-projects">
                    <Carousel responsive={responsive} ssr={true} infinite={true} autoPlay={false} keyBoardControl={true} customTransition="all 0.5s" transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]}>
                        {projectData.map((project) => (
                            <DataCarrousel className="card-body relative overflow-hidden duration-700 rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600" openModal={openModal} project={project} key={project.key} />
                        ))}
                    </Carousel>
                </div>
                <div className="footer-text-projects">
                    <h3 className="gradient-text">
                        Mostrar todo <span className="material-symbols-outlined icon-email">arrow_forward</span>
                    </h3>
                </div>
            </div>
            {selectedProject && <ModalShared isOpen={modalIsOpen} onRequestClose={closeModal} project={selectedProject} />}
        </div>
    );
};

export default Projects;
