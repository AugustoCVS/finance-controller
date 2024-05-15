import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      gray: {
        100: "#E1E1E6",
        300: "#C4C4CC",
        400: "#8D8D99",
        500: "#7C7C8A",
        600: "#323238",
        700: "#29292E",
        800: "#202024",
        900: "#121214",
      },
      green: {
        300: "#00B37E",
        500: "#00875F",
        700: "#015F43",
      },
      red: {
        300: "#F75A68",
        500: "#AB222E",
        700: "#7A1921",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xsm: '375px',
      xsm1: '420px',
      sm: "480px", 
      sm1: '560px',
      sm2: "640px",
      md: "768px",
      md1: "900px",
      md2: "1024px",
      lg: "1280px",
      xl: "1536px",
      xl1: "1920px"
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
