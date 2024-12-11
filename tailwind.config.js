/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      "gray" : {
        "900":"#111827",

        "800":"#1F2937",

        "700":"#374151",
   
        "600":"#4B5563",

        "500":"#6B7280",

        "400":"#9CA3AF",
   
        "300":"#D1D5DB",

        "200":"#ESEZEB",

        "100":"#F3F4F6"
      }
    }
    },
  },
  plugins: [],
}