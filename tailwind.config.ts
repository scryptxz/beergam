import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "rgba(255, 255, 255, 0)",
      white: "#FFF",
      black: "#151514",
      "orange-300": "#FFBD70",
      "orange-500": "#FF8A00",
      "blue-10": "#EAECF1",
      "blue-50": "#F6F9FF",
      "blue-100": "#EEF2FF",
      "blue-400": "#487AF9",
      "blue-500": "#003CB7",
      "blue-600": "#284277",
      "green-50": "#F0FDFA",
      "green-600": "#10A142",
      "gray-50": "#F5F5F5",
      "gray-100": "#efefef",
      "gray-200": "#D9D9D9",
      "gray-500": "#737373",
      "purple-light": "rgba(101, 52, 248, 0.10)",
    },

    animation: {
      expandMenu: "expandMenu 400ms forwards",
    },

    keyframes: {
      expandMenu: {
        "0%": {
          width: "90px",
        },
        "100%": {
          width: "220px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
