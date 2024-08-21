import { Project } from "./modalShared";

export interface DataCarrouselProps {
    project: Project;
    className: string;
    openModal: (project: any) => void;
}