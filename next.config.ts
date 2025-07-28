import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SERVER_URL_HTTP: process.env.NEXT_PUBLIC_SERVER_URL_HTTP,
    NEXT_PUBLIC_SERVER_URL_HTTPS: process.env.NEXT_PUBLIC_SERVER_URL_HTTPS,
    DEVMODE: (process.env.NEXT_PUBLIC_DEVMODE === 'development').toString(),
    BOT_URL: process.env.NEXT_PUBLIC_BOT_URL,
    DISCORD_URL: process.env.NEXT_PUBLIC_DISCORD_URL,
    TELEGRAM_URL: process.env.NEXT_PUBLIC_TELEGRAM_URL,
    VK_URL: process.env.NEXT_PUBLIC_VK_URL
  }

};

module.exports = {
  reactStrictMode: false,
};

export default nextConfig;
