/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      colors: {
        "dark-purple-200": "#353353",
        "dark-purple-300": "#1e1d30",
        "pink-red": "rgb(176, 57, 83)",
        "pink-red-light": "rgb(206, 100, 123)",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        komyca: ["Komyca", "sans-serif"],
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      animation: {
        "zoom-in": "zoomIn 0.3s ease-in-out forwards", // Animation de zoom-in
        "zoom-out": "zoomOut 0.3s ease-in-out forwards", // Animation de zoom-out
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 0.3s infinite'
      },
      keyframes: {
        zoomIn: {
          "0%": {
            transform: "scale(0.8)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        zoomOut: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0.8)",
            opacity: "0",
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      textShadow: {
        pink_red_glow: "0 0 5px #b03953, 0 0 10px #b03953, 0 0 20px #b03953, 0 0 40px #b03953, 0 0 80px #b03953",
        white_glow: "0 0 5px #b5b5b5, 0 0 10px #b5b5b5, 0 0 20px #b5b5b5, 0 0 40px #b5b5b5, 0 0 80px #b5b5b5",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
