const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      ...defaultTheme.borderRadius,
      pill: "100vmax",
    },

    screens: {
      xs: "30em", // => @media (min-width: 480px) { ... }
      ...defaultTheme.screens,
    },

    extend: {
      screens: {
        sm: "40em", // => @media (min-width: 640px) { ... }
        md: "48em", // => @media (min-width: 768px) { ... }
        lg: "64em", // => @media (min-width: 1024px) { ... }
        xl: "80em", // => @media (min-width: 1280px) { ... }
        "2xl": "96em", // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: {
          100: "#7ec384",
          200: "#3fc384",
          300: "#45625d",
        },
        secondary: {
          100: "#a3d2d5",
          200: "#6aa5a9",
        },
      },
      gridTemplateColumns: {
        // arbitrary values
        "fill-16": "repeat(auto-fill, minmax(4rem, 1fr))",
        "fill-20": "repeat(auto-fill, minmax(5rem, 1fr))",
        "fit-big": "repeat(auto-fit, minmax(25rem, 1fr))",
        // etc.
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".svg-icon": {
          fill: "currentColor",
        },
        ".w-full-shadow": {
          boxShadow: "0 0 0 100vmax currentColor, 0 0 2rem currentColor",
          clipPath: "inset(0 -100vmax)",
        },
        ".h-container": {
          "--max-width": "111rem",
          "--container-padding": "1.6rem",

          width: "min(var(--max-width), 100% - (var(--container-padding) * 2))",
          marginInline: "auto",
        },
      });
    }),
  ],
};
