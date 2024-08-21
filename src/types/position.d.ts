export interface MousePositionProviderProps {
    projectKey: string;
    children: (props: { position: { x: number; y: number }; handleMouseMove: (e: React.MouseEvent) => void }) => React.ReactNode;
}
