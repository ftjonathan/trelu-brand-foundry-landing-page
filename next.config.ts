import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repositoryBasePath = "/trelu-brand-foundry-landing-page";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProduction ? repositoryBasePath : "",
  assetPrefix: isProduction ? `${repositoryBasePath}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
