/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    screens: {
      gx: { min: "200px", max: "300px" },
      s: { min: "310px",  max: "500px" },
      xs: { max: "768px" },

      md: { min: "501px", max: "950px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "951px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        carditem: "0 6px 20px rgba(56, 125, 255, 0.17);",
        cards: "10px 12px 24px rgba(56, 125, 255, 0.25)",
      },
      filter: {
        carditem:
          "-webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017)); filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));",
      },
    },
  },
  plugins: [],
};
