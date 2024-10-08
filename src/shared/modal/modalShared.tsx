import React from "react";
import ReactModal from "react-modal";

import "./modalShared.css";

import { Details, ModalSharedProps } from "@/types/modalShared";

import Expansion from "../expansion/expansion";
import Image from "next/image";

const ModalShared: React.FC<ModalSharedProps> = ({ isOpen, onRequestClose, project }) => {
    if (!project) return null;

    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Project Details" className="modal" overlayClassName="modal-overlay">
            <div id="modal-container" className="container-modal">
                <button onClick={onRequestClose} className="modal-close-button">
                    &times;
                </button>
                <h2 className="gradient-text-inverse title-modal">{project.name}</h2>
                <Image className="image-modal" src={project?.img || "/images/no-image.png"} alt={project.name + "image"} width={500} height={500} />

                {project.details &&
                    project.details.length > 0 &&
                    project.details.map((details: Details, index: number) => {
                        return (
                            <Expansion key={"expansion-panel-"+ index} title={details.title}>
                                <p>{details.description}</p>
                            </Expansion>
                        );
                    })}
            </div>
        </ReactModal>
    );
};

export default ModalShared;
