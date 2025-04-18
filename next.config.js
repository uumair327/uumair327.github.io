const { withContentlayer } = require("next-contentlayer");

const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: "docs",
};

module.exports = withContentlayer(nextConfig);
