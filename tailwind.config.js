/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#0dcb8a", // '#6ef3a4',
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
      },
    },
  },
  plugins: [],
};
