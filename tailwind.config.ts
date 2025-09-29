import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira", "sans-serif"],
        slab: ["RobotoSlab", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
