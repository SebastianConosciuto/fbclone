/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname:'links.papareact.com',
                port: ''
            },
            {
                protocol:'https',
                hostname:'firebasestorage.googleapis.com',
                port: ''
            },
            {
                protocol:'https',
                hostname:'platform-lookaside.fbsbx.com',
                port: ''
            },
        ],
            
            
        
    },
};

export default nextConfig;
