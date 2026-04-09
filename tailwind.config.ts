import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f7f1eb",
        linen: "#efe4d6",
        stone: "#9c8772",
        cocoa: "#5e4a3f",
        pine: "#37463d",
        gold: "#b79b6c"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(94, 74, 63, 0.12)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)"
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "slow-pulse": "slowPulse 4.5s ease-in-out infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slowPulse: {
          "0%, 100%": { opacity: "0.75", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
