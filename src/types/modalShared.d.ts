export interface Resources {
    key: string;
    description: string;
    url: string;
}

export interface Details {
    title: string; 
    description: string;
    images?: Resources[];
    tecnhnologies?: Resources[];
}

export interface Project {
    key: string;
    name: string;
    img: string;
    details?: Details[];
}

export interface ModalSharedProps {
    isOpen: boolean;
    onRequestClose: () => void;
    project: Project | null;
}
