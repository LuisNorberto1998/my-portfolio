/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "fastly.picsum.photos",
          port: "",
          pathname: "/**",
        },
      ],
    },
    output: 'export', // Añade esta línea para soportar exportación estática
  };
  
  export default nextConfig;
  