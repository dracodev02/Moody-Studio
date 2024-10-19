import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#920707",
      },
      fontFamily: {
        outfit: ["var(--outfit)", "sans-serif"],
        omega: ["var(--omega)", "sans-serif"],
      },
      backgroundImage: {
        gradientSec1:
          "linear-gradient(180deg, #000000 -2.9%, rgba(83, 11, 11, 0) 52.55%, #000000 98.81%)",
        sec2: "linear-gradient(51.99deg, #000000 46.66%, rgba(0, 0, 0, 0.5) 83.78%, #000000 96.3%)",
      },
      maxWidth: {
        desktop: "1192px",
      },
      boxShadow: {
        ourProject: "0px 0px 72px 0px #92070780",
      },
    },
  },
  plugins: [],
};
export default config;
