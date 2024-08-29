import { Data } from "@/types/modalShared";

export const projectData: Data[] = [
    {
        code: "2",
        img: "/images/gnp.png",
        name: "Portal Intermediarios",
        details: [
            {
                title: "Descripción",
                description:
                    "El portal de intermediarios de GNP es una plataforma exclusiva para personas afiliadas que les permite acceder a herramientas para contratar con clientes, en este portal, los afiliados pueden: Registrarse, Conocer información actualizada sobre precios, coberturas y características de los seguros, Conocer los objetivos de cada mes, Acceder al cotizador en línea para determinar el precio de la póliza para cada cliente ",
            },
        ],
        linkPage: "https://portalintermediarios.gnp.com.mx/",
    },
    {
        code: "3",
        img: "/images/aforeweb.png",
        name: "AforeWeb",
        details: [{ title: "Descripción", description: "AforeWeb es un portal de internet que permite a los ciudadanos mexicanos realizar trámites y consultar su Cuenta AFORE, así como motivar el ahorro voluntario." }],
        linkPage: "https://www.aforeweb.com.mx/",
    },
    {
        code: "4",
        img: "/images/logo-eagle.png",
        name: "Eagle Ear",
        details: [
            { title: "Objetivo", description: "La empresa comercializadora Eagle Wear busca obtener un mayor alcance en el mercado de la moda, por lo que se ha decidido desarrollar una aplicación web" },
            { title: "Descripción", description: "Proyecto de practica, que incluye inicio de sesión, creación de usuario mediante haciendo uso de Google Cloud Platform para alojar el sitio, autenticar usuarios, cuenta con el consumo de la api (https://dummyjson.com/) para el apartado de productos (filtrado de los mismos) y con un ejemplo de como funciona a nivel básico un carrito de compras con una Base de datos no relaciónal de Firebase." },
        ],
        linkCode: 'https://github.com/LuisNorberto1998/sps-web-shop-norberto',
        linkPage: "https://sps-web-shop-norberto.web.app/login",
    },
];
