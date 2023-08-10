/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EVENT_URL: process.env.NEXT_PUBLIC_EVENT_API_URL,
    USER_URL: process.env.NEXT_PUBLIC_USERS_API_URL,
    AUTH_URL: process.env.NEXT_PUBLIC_AUTH_API_URL,
  },
};

module.exports = nextConfig;
