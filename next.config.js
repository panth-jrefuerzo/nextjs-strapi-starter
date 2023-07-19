/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        STRAPI_PUBLIC_API_URL: process.env.STRAPI_PUBLIC_API_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/*/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/*/**',
            },
            {
                protocol: 'https',
                hostname: process.env.IMAGE_DOMAIN,
                port: '',
                pathname: '/*/**',
            }
        ],
    },
}

module.exports = nextConfig
