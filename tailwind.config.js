import path from "path";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    path.resolve(__dirname, "./index.html"),
    path.resolve(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a1a1a",
        "on-background": "#ffffff",
        primary: "#3b82f6",
        "on-primary": "#ffffff",
        surface: "#2a2a2a",
        "on-surface": "#ffffff",
        skeleton: "#3a3a3a",
      },
    },
  },
  plugins: [],
};
