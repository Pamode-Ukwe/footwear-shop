/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hero-bg" : "#C5B198",
        "main-bg" : "#FFFFFF",
        "exclusive-deal-1" : "#F3EEE8",
        "exclusive-deal-2" : "#EFEFEF",
        "exclusive-deal-3" : "#F8F6F0",
        "sucess-green" : "#38CB89",
        "main-black" : "#141718",
        "main-grey" : "#B1B5C3",
        "pricing-red" : "#EA4336",
        "discount-green" : "#C5FFCE",
        "form-border-gray" : "#6C7275",
        "discount-offer" : "#591D24",
        "mobile-hero" : "BA2B06D1",
      },
      fontFamily: {
        dmsans : ["DM SANS", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inconsolata: ["Inconsolata", "sans-serif"]
      }
    },
    screens: {
      sm: "770px",
      md: "900px"
    }
  },
  plugins: [],
}
