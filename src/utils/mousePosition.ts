import { useState, useCallback } from "react";

const useMousePosition = (id: string) => {
    const [positions, setPositions] = useState<Record<string, { x: number, y: number }>>({});

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPositions(prev => ({
            ...prev,
            [id]: { x, y }
        }));
    }, [id]);

    return { position: positions[id] || { x: 0, y: 0 }, handleMouseMove };
};

export default useMousePosition;
