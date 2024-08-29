import './tooltip.css';

interface TooltipProps {
    message: string;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
    return (
        <div className="relative flex items-center justify-center group tooltip-container">
            {children}
            <div className="absolute left-1/2 bottom-full mb-2 w-max -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="bg-gray-800 text-white text-xs rounded py-2 px-4 shadow-lg">
                    {message}
                    <div className="w-3 h-3 bg-gray-800 absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45"></div>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
