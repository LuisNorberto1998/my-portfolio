"use client";
import React, { useState } from "react";

interface Event {
    title: string;
    date: string;
    description: string;
}

const Social = () => {
    const events = [
        {
            title: "Evento 1",
            date: "01/01/2024",
            description: "Descripción del evento 1",
            icon: "🎉",
        },
        {
            title: "Evento 2",
            date: "01/02/2024",
            description: "Descripción del evento 2",
            icon: "🎁",
        },
        // Agrega más eventos aquí
    ];

    return (
        <div className="social-container">
            <div className="social-row">
                <div className="social-text-title">
                    <h1> Educación & Experiencia</h1>
                </div>
                <div className="">
                    <h1>Mi Línea de Tiempo</h1>
                </div>
            </div>
        </div>
    );
};

export default Social;
