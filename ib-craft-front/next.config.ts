import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SERVER_URL_HTTP: process.env.NEXT_PUBLIC_SERVER_URL_HTTP,
    NEXT_PUBLIC_SERVER_URL_HTTPS: process.env.NEXT_PUBLIC_SERVER_URL_HTTPS,
  }

};

module.exports = {
  reactStrictMode: false, 
};

export default nextConfig;
