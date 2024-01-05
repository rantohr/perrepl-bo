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
        white: "#FFFFFF",
        "violet-1": "#381a44",
        "violet-2": "#030229",
        "violet-3": "#381A4426",
        "violet-light": "#9f1972",
        "violet-pink": "#d20072",
        "transparent-grey": "#a3a3a333",
        grey: "#a3a3a3",
        "grey-1": "#5E6062",
        "grey-2": "#888888",
        "grey-3": "#AAAAAA",
        "grey-4": "#00000099",
        "grey-5": "#03022980",
        "grey-6": "#381A4433",
        "grey-7": "#000000B2",
        "grey-8": "#0000004D",
        "grey-9": "#00000033",
        "grey-10": "#0000001A",
        "grey-11": "#00000040",
        "grey-12": "#979797",
        neutre: "#00000080",
        "green-1": "#15D77A",
        "green-2": "#15D77A1A",
        "white-1": "#ABD4F2",
        "black-1": "#000000CC",
        "blue-1": "#1189F81A",
        "blue-2": "#1189F8",
        "blue-3": "#381a4480",
        "yellow-1": "#F8B711",
        "yellow-2": "#F8B7111A",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"], // ITO zavatra ito ao am index.html no misintona azy
      },
      fontSize: {
        10: "10px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
