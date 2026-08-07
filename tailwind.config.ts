import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        text: "var(--color-text)",
        border: "var(--color-border)",
      },
    },
  },

  plugins: [],
};

export default config;
