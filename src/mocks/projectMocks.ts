import { Data } from "@/types/modalShared";

export const projectData: Data[] = [
    { code: "1", img: "/images/citibanamex.png", name: "Citibanamex" },
    { code: "2", img: "/images/gnp.png", name: "Portal Intermediarios" },
    {
        code: "3",
        img: "/images/aforeweb.png",
        name: "AforeWeb",
        details: [
            { title: "Descripción", description: "Aforeweb es un proyecto en el que trabaje por más de un año " },
            { title: "Imagenes", description: "Imagenes demostrativas del aplicativo", images: [
                { key: "0", url: "", description: "" },
                { key: "2", url: "", description: "" },
            ] },
        ],
    },
];
