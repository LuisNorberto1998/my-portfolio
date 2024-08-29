import React from "react";
import ReactModal from "react-modal";

import "./modalShared.css";

import { Details, ModalSharedProps } from "@/types/modalShared";

import Expansion from "../expansion/expansion";
import Image from "next/image";

const ModalShared: React.FC<ModalSharedProps> = ({ isOpen, onRequestClose, project }) => {
    const handleViewCode = () => {
        // Aquí pones la lógica para ver el código, por ejemplo, redirigir a una URL del repositorio
        window.open(`${project?.linkCode}`, "_blank");
    };

    const handleViewPage = () => {
        // Aquí pones la lógica para ver la página del proyecto
        window.open(`${project?.linkPage}`, "_blank");
    };

    if (!project) return null;

    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Project Details" className="modal" overlayClassName="modal-overlay">
            <div id="modal-container" className="container-modal">
                <button onClick={onRequestClose} className="modal-close-button">
                    &times;
                </button>
                <h2 className="gradient-text-inverse title-modal">{project.name}</h2>
                <Image className="image-modal" src={project?.img ?? "/images/no-image.png"} alt={project.name + "image"} width={500} height={500} />

                {project.details &&
                    project.details.length > 0 &&
                    project.details.map((details: Details, index: number) => {
                        return (
                            <Expansion key={"expansion-panel-" + index} title={details.title}>
                                <p className="expansion-panel-text">{details.description}</p>
                            </Expansion>
                        );
                    })}

                <div className="modal-buttons">
                    {project.linkCode && (
                        <button onClick={handleViewCode} className="btn btn-primary" title="Ver código">
                            Ver Código
                        </button>
                    )}
                    {project.linkPage && <button onClick={handleViewPage} className="btn btn-secondary" title="Ver página">
                        Ver Página
                    </button>}
                </div>
            </div>
        </ReactModal>
    );
};

export default ModalShared;
