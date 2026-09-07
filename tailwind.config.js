/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nude: {
          50: "#FFFCFA",
          100: "#FBF3EC",
          200: "#F6EAE0",
          300: "#EEDCCC",
          400: "#E4CAB2",
          500: "#D8B79A",
        },
        gold: {
          100: "#EEE2C8",
          200: "#DFCBA0",
          300: "#CBAE79",
          400: "#B99764",
          500: "#A2814F",
          600: "#846A42",
        },
        rose: {
          200: "#E6CFC4",
          300: "#D6B4A5",
          400: "#C29685",
        },
        ink: {
          400: "#7A6355",
          500: "#5C483B",
          600: "#4A372E",
          700: "#382820",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
