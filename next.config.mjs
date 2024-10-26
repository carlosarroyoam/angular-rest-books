/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.isbndb.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
