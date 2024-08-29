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
    fill?: string;
    img?: string;
    code: string;
    icon?: any;
    width?: number;
    height?: number;
    name?: string;
    details?: Details[];
    linkCode?: string;
    linkPage?: string;
}

export interface ModalSharedProps {
    isOpen: boolean;
    onRequestClose: () => void;
    project: Data | null;
}
