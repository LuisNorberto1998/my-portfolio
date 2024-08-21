const Angular = ({ width = 90, height = 94, fill = "white", ...props }) => (
    <svg 
        width={width} 
        height={height} 
        viewBox="0 0 90 94" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        {...props}
    >
        <path 
            d="M72.5812 71.6406H62.2781L56.725 57.9625H33.2656L27.7125 71.6468H17.4031L44.9968 10.4875L72.5812 71.6406ZM44.9968 0.137451L0.793701 15.6875L7.53433 73.3687L45 93.8593L82.475 73.3875L89.2062 15.6937L44.9968 0.140576V0.137451ZM36.9187 49.5187H53.0781L44.9937 30.3531L36.9187 49.5187Z" 
            fill={fill}
        />
    </svg>
);

export default Angular;