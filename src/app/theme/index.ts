const defaultTheme = require("tailwindcss/defaultTheme");

export const extendedTheme = {
  extend: {
    ...defaultTheme,
    fontFamily: {
      main: ["var(--font-ubuntu)", defaultTheme.fontFamily.sans], // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
    },
    colors: {
      primary: "#219EBC",
      secondary: "#FFB703",
      accent: "#8ECAE6",
      neutral: "#2a323c",
      dark: "#023047",
      info: "#3abff8",
      success: "#36d399",
      warning: "#FB8500",
      error: "#f87272",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};
