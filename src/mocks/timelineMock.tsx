import { DataTimeline, IconTimeline } from "@/types/timeline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";

const getCssVariable = (variable: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

export const workIcon: IconTimeline = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: "#0f0715", color: "#fff" },
};

const schoolIcon: IconTimeline = {
    icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: { background: "#0f0715", color: "#fff" },
};

export const timeline: DataTimeline[] = [
    {
        key: 0,
        icon: workIcon,
        date: "DICIEMBRE 2022 - JUNIO 2024",
        title: "Frontend Developer",
        subtitle: "Proyecto: Citibanamex - Proyectos Internos",
        desc: [
            "• Desarrollo de Componentes e integración de servicios con Angular, modificación, mantenimiento y refactorización de código para optimizar el rendimiento y la calidad del proyecto.\n",
            "• Integración continua y entrega continua (CI/CD, Jenkins, RLM).\n",
            "• Desarrollo de servicios REST en Java con Spring Boot para la creación eficiente de APIs.\n",
            "• Control de versiones con Git (Bitbucket) para creación, integración y gestión de ramas.\n",
            "• Administración de base de datos SQL Server (Creación de tablas Procedimientos Almacenados, Diccionario de Datos).\n",
            "• Empleo IBM WebSphere® Liberty como servidor de aplicaciones en el backend y Postman para pruebas.\n",
        ],
        tools: "Angular, Bootstrap, Java, Typescript, Visual Studio Code, Postman, DBeaver, Oracle SQL Developer, Jira, Git, Sonar, Bitbucket, HTML, CSS, Tomcat, Eclipse, WebSphere Liberty, Angular Material, Spring Boot.",
    },
    {
        key: 1,
        icon: workIcon,
        date: "SEPTTIEMBRE 2022 – DICIEMBRE 2022",
        title: "Frontend Developer",
        subtitle: "Proyecto: Actinver - Interno",
        desc: [
            "• Desarrollo Front-end utilizando Javascript, CSS, SCSS, Angular y Bootstrap para crear maquetas y funcionalidades de componentes.\n",
            "• Creación y modificación de procedimientos almacenados, tablas y joins en bases de datos SQL Server.\n",
            "• Integración de servicios REST con Ajax.\n",
            "• Desarrollo de servicios REST con Java.\n",
            "• Configuración de herramientas como Widfly y Maven en entornos de desarrollo.\n",
        ],
        tools: "Angular, Java, Visual Studio Code, Jira, Oracle SQL Developer, TypeScript, Git, jQuery, Sonar, HTML, CSS, SASS, SCSS, Bootstrap, Angular Material , Spring Boot.",
    },
    {
        key: 2,
        icon: workIcon,
        date: "FEBRERO 2022 – SEPTIEMBRE 2022",
        title: "Frontend Developer",
        subtitle: "Proyecto: Portal Intermediarios",
        desc: [
            "• Desarrollo de pantallas y componentes utilizando Angular Material, Bootstrap, SCSS, SASS y CSS.\n",
            "• Consumo de servicios a través de API Rest para integrar la funcionalidad de cada pantalla.\n",
            "• Manejo del DOM para garantizar una experiencia de usuario fluida.\n",
            "• Control de versiones y seguimiento de cambios en Git (Gitlab).\n",
            "• Refactorización de código y pruebas con Sonar.\n",
            "• Manejo de incidencias y entregables mediante Jira.\n",
        ],
        tools: "Angular, NPM, Visual Studio Code, Router, Ajax, Jira, Git, Gitlab, Angular Material, Bootstrap, HTML, CSS, Typescript, Sonar.",
    },
    {
        key: 3,
        icon: workIcon,
        date: "ABRIL 2021 – ABRIL 2022",
        title: "Frontend Developer",
        subtitle: "Proyecto: AforeWeb",
        desc: [
            "• Maquetación de pantallas para diversos componentes utilizando React js, hooks y redux.\n",
            "• Consumo de servicios a través de API Rest con Axios.\n",
            "• Manejo de rutas y protección de accesos por tipo de perfil.\n",
            "• Implementación de pruebas unitarias con Jest.\n",
            "• Control de versiones y seguimiento de cambios en Git (Bitbucket).\n",
            "• Refactorización de código y pruebas sonar.\n",
            "• Implementación de React Hook Form para la validación de formularios y diseño responsivo.\n",
            "• Implementación de Prime React para la construcción de componentes.\n",
        ],
        tools: "React.js, NPM, Visual Studio Code, Redux, Hooks, Jira, Spiratest, GitLab, Jest, Pruebas unitarias, Sonar.",
    },
    {
        key: 4,
        icon: schoolIcon,
        date: "DICIEMBRE 2020 – ABRIL 2021",
        title: "Frontend Developer",
        subtitle: "Proyecto: iAfore",
        desc: [
            "• Desarrollo de pantallas y componentes utilizando Angular Material, Bootstrap, SCSS, SASS y CSS.\n",
            "• Consumo de servicios a través de API Rest para integrar la funcionalidad de cada pantalla.\n",
            "• Manejo del DOM para garantizar una experiencia de usuario fluida.\n",
            "• Control de versiones y seguimiento de cambios en Git (Gitlab).\n",
            "• Refactorización de código y pruebas con Sonar.\n",
            "• Manejo de incidencias y entregables mediante Jira.\n",
        ],
        tools: "Java, Git, Gitlab, Oracle SQL Developer, TypeScript, Angular, Bootstrap, HTML, CSS, Visual Studio Code, Tomcat, Eclipse.",
    },
];
