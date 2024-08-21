import React from 'react';

const Flutter = ({ width = 70, height = 70, fill = "currentColor", ...props }) => (
    <svg 
        width={width} 
        height={height} 
        viewBox="0 0 70 70" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        {...props}
    >
        <path 
            d="M43.3981 32.2895L20.0503 51.1252L43.3952 69.9958H70L46.6898 51.1299L70 32.2872H43.401L43.3981 32.2895ZM43.349 -0.00415039L0 34.997L13.3515 45.7896L69.9422 0.0355284H43.3952L43.349 -0.00415039Z" 
            fill={fill}
        />
    </svg>
);

export default Flutter;