/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: '"Exo 2"',
      },
      container: {
        padding: {
          DEFAULT: "15px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1440px",
      },
      colors: {
        primary: "#FFB703",
        darkBlue: "#023047",
        lightBlue: "#219EBC",
        orange: "#FB8500",
        greyFill: "#F2F2F2",
      },
      extend: {
        backgroundImage: {
          mainSlider: "url('img/mainSlider_bg.png')",
        },
        keyframes: {
          shake: {
            "10%, 90%": { transform: "translate3d(-1px, 0,0 )" },
            "20%, 80%": { transform: "translate3d(2px, 0,0 )" },
            "30%, 50%, 70%": { transform: "translate3d(-4px, 0,0 )" },
            "40%, 60%": { transform: "translate3d(4px, 0,0 )" },
          },
        },
        animation: {
          shake: "shake 1s ease-in-out",
        },
      },
    },
  },
  plugins: [],
};

