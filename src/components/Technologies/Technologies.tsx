import "./Technologies.css";

import Angular from "../../../public/components/angular";
import Flutter from "../../../public/components/flutter";
import Java from "../../../public/components/java";
import Icon from "../../../public/components/react";

export default function Technologies() {
    const technologies = [
        { key: "0", icon: <Angular width={52.5} height={55} fill="#9747FF"></Angular>, name: "Angular" },
        { key: "3", icon: <Icon width={52.5} height={55} fill="#9747FF"></Icon>, name: "React" },
        { key: "2", icon: <Java width={52.5} height={55} fill="#9747FF"></Java>, name: "Java" },
        { key: "1", icon: <Flutter width={52.5} height={55} fill="#9747FF"></Flutter>, name: "Flutter" },
    ];

    return (
        <div id="tecnologias" className="technologies-card">
            <div className="title-card">
                <h1 className="gradient-text-inverse">Tecnologias</h1>
            </div>
            <div className="list-technologies">
                {technologies.map((technologie) => (
                    <div key={technologie.key}>
                        <div className="container-list grad">
                            {technologie.icon}
                            <h3 className="gradient-text">{technologie.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
