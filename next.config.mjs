/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, 
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fastly.picsum.photos",
                port: "",
                pathname: "/**",
            },
        ],
    },
    output: "export",
    trailingSlash: true,

};
export default nextConfig;
