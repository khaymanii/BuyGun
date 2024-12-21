/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        tablet: { max: "1024px" },
        ipad: { max: "834px" },
        mobile: { max: "428px" },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
