import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "navigation": "#05161A",
        "background": "#05161A",
        "spinner": "#0C7075",
        "highlight": "#15af9a",
        "action": "#0F969C",
        "hover-action": "#077F6A"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
