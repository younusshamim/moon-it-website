/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "moonitfeni.com" }],
  },
};

export default nextConfig;
