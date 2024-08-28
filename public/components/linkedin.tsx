const Linkedin = ({ width = 70, height = 70, fill = "currentColor", ...props }) =>  {
    return (
      <svg
        width={width} 
        height={height} 
        fill="none"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill={fill}
          d="M32.5 40a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM25 50a5 5 0 015-5h5a5 5 0 015 5v40a5 5 0 01-5 5h-5a5 5 0 01-5-5V50zM55 95h5a5 5 0 005-5V67.5C65 60 80 55 80 65v25.002A4.998 4.998 0 0085 95h5a5 5 0 005-5V60c0-10-7.5-15-17.5-15S65 52.5 65 52.5V50a5 5 0 00-5-5h-5a5 5 0 00-5 5v40a5 5 0 005 5z"
        ></path>
        <path
          fill={fill}
          fillRule="evenodd"
          d="M100 5c8.285 0 15 6.716 15 15v80c0 8.285-6.715 15-15 15H20c-8.284 0-15-6.715-15-15V20c0-8.284 6.716-15 15-15h80zm0 10a5 5 0 015 5v80a5 5 0 01-5 5H20a5 5 0 01-5-5V20a5 5 0 015-5h80z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }
  
  export default Linkedin;