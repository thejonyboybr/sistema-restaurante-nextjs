const { env } = require("./src/server/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
  nextConfig,
};
