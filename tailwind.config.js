import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: { DEFAULT: "#0dcb8a", soft: "#7cf3c5", hover: "#3be0a6" },
        ink: "#07090a", // page background
        deep: "#0a0d0c", // inset panels
        surface: "#0c100f", // cards
        raised: "#121816", // tags, hover fills
        fg: { DEFAULT: "#e8eeeb", soft: "#c9d3ce" },
        muted: "#9aa7a1",
        dim: "#7f8b86",
        faint: "#56625d",
      },
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
        mono: ['"Geist Mono"', ...defaultTheme.fontFamily.mono],
        serif: ['"Instrument Serif"', ...defaultTheme.fontFamily.serif],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(.2,.7,.2,1)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "none" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: { to: { transform: "translateX(-50%)" } },
        blink: { "50%": { opacity: "0" } },
        "ping-soft": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        rise: "rise .8s cubic-bezier(.2,.7,.2,1) both",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 36s linear infinite",
        blink: "blink 1s steps(1) infinite",
        "ping-soft": "ping-soft 1.8s cubic-bezier(0,0,.2,1) infinite",
      },
    },
  },
  plugins: [],
};
