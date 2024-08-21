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

export interface Data {
    key: string;
    name: string;
    img?: string;
    icon?: any;
    details?: Details[];
}

export interface ModalSharedProps {
    isOpen: boolean;
    onRequestClose: () => void;
    project: Data | null;
}
