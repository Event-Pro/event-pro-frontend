/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EVENT_API_URL: process.env.EVENT_API_URL,
  },
};

module.exports = nextConfig;
