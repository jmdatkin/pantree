/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/stock",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
