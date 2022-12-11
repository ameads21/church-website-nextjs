/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: ["**.churchofjesuschrist.org", "**.ldscdn.org"],
      },
    ],
  },
};

module.exports = nextConfig;
