import React, { useState } from "react";
import "./expansion.css"; 

import { ExpansionProps } from "@/types/expansion";

const Expansion: React.FC<ExpansionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="expansion-container">
            <button onClick={togglePanel} className="expansion-header">
                <span className="gradient-text expansion-title">{title}</span>
            </button>
            <div className={`expansion-content ${isOpen ? "expansion-content-open" : "expansion-content-closed"}`}>
                <div className="expansion-body">{children}</div>
            </div>
        </div>
    );
};

export default Expansion;
