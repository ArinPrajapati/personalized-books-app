/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-1": "#662400",
        "orange-2": "#B33F00",
        "orange-3": "#FF6B1A",
        "teal-1": "#006663",
        "teal-2": "#00B3AD",
      },
      fontFamily: {
        'Bricolage': "Bricolage Grotesque, sans-serif",
      },
    },
  },
  plugins: [],
};
