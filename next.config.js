/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.churchofjesuschrist.org",
      },
      {
        protocol: "https",
        hostname: "**.ldscdn.org",
      },
    ],
  },
};

module.exports = nextConfig;
