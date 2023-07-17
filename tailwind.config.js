/** @type {import('tailwindcss').Config} */

import { extendedTheme } from "./src/app/theme/index";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: extendedTheme,
  plugins: [],
};
