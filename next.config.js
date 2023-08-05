/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EVENT_API_URL: process.env.EVENT_API_URL,
    USER_API_URL: process.env.USER_API_URL,
    AUTH_API_URL: process.env.AUTH_API_URL,
  },
};

module.exports = nextConfig;
