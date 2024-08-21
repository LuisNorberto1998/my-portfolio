import { Data } from "./modalShared";

export interface GradientDataProps {
    data: Data;
    className: string;
    openModal: (data: any) => void;
}