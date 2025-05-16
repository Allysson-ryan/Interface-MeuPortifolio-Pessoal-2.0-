import { type Config } from "tailwindcss";

export const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        button: "var(var(--button-background);)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textThird: "var(--text-third)",
        textFourth: "var(--text-fourth)",
        textFifth: "var(--text-fifth)",
        gray: "var(--gray)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};

export default config;
