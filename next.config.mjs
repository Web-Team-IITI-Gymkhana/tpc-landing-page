/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
      source: "/data/pdf/brochure.pdf",
      destination: "/django/api/landing-config/brochure.pdf",
      permanent: false,
    }];
  },
};

export default nextConfig;
