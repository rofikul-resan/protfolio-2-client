import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        subHeading: " font-semibold text-violet-400",
        heading: " font-bold gradient-text",
        paragraph: "font-roboto text-white",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: { card: "0px 35px 120px -15px #211e35" },
      backgroundImage: { "bg-body": "url('/banner-bg.jpg')" },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
