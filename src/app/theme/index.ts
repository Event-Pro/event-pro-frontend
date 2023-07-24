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
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    backgroundImage: {
      desktopBackground: "url('../utils/images/desktopBackground.webp')",
      mobileBackground: "url('../utils/images/mobileBackground.webp')",
      tabletBackground: "url('../utils/images/tablet.webp')",
      groupBackground: "url('../utils/images/group.webp')",
      planningBackground: "url('../utils/images/planning.webp')",
      ticketBackground: "url('../utils/images/ticketLogoLight.png')",
    },
    animation: {
      fadeInStayOut: "fadeInOut 4s ease-in-out infinite",
      fadeIn: "animate-fadeIn delay-2000",
    },
    dropShadow: {
      "text-sm": "1px 1px 0px rgba(0, 0, 0, 0.90)",
      "text-md": "1px 2px 0px rgba(0, 0, 0, 0.90)",
      "text-lg": "1px 4px 0px rgba(0, 0, 0, 0.90)",
    },
  },
};
