/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "orientrek.com",
        port: "",
        pathname: "/remote/**",
      },
    ],
  },
};

module.exports = nextConfig;
