/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "violet-1": "#381a44",
        "violet-light": "#9f1972",
        "violet-pink": "#d20072",
        "transparent-grey": "#a3a3a333",
        grey: "#a3a3a3",
        "grey-1": "#5E6062",
        neutre: "#00000080",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"], // ITO zavatra ito ao am index.html no misintona azy
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
