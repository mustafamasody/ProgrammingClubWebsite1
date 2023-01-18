// tailwind.config.js - Tailwind CSS configuration file
// Description: This file contains the Tailwind CSS configuration sources
// Author: Joshua Lim
// Date: 11/08/2022

// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./frontend/views/**/*.ejs",
    "./frontend/js/**/*.js}"
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '320px',
        'tablet': '480px',
        'laptop': '770px',
        'desktop': '1024px',
        'xl': '1200px',
      },
      fontFamily: {
        MetropolisThin: ["MetropolisThin", "sans-serif"],
        MetropolisThinItalic: ["MetropolisThinItalic", "sans-serif"],
        MetropolisLight: ["MetropolisLight", "sans-serif"],
        MetropolisLightItalic: ["MetropolisLightItalic", "sans-serif"],
        MetropolisRegular: ["MetropolisRegular", "sans-serif"],
        MetropolisRegularItalic: ["MetropolisRegularItalic", "sans-serif"],
        MetropolisMedium: ["MetropolisMedium", "sans-serif"],
        MetropolisMediumItalic: ["MetropolisMediumItalic", "sans-serif"],
        MetropolisSemiBold: ["MetropolisSemiBold", "sans-serif"],
        MetropolisSemiBoldItalic: ["MetropolisSemiBoldItalic", "sans-serif"],
        MetropolisBold: ["MetropolisBold", "sans-serif"],
        MetropolisBoldItalic: ["MetropolisBoldItalic", "sans-serif"],
        MetropolisExtraBold: ["MetropolisExtraBold", "sans-serif"],
        MetropolisExtraBoldItalic: ["MetropolisExtraBoldItalic", "sans-serif"],
        MetropolisBlack: ["MetropolisBlack", "sans-serif"],
        MetropolisBlackItalic: ["MetropolisBlackItalic", "sans-serif"],
      },
      colors: {
        primary: '#62c692',
        secondary: '#0042b4',
        light: '#e6e6e6',
        dark: '#0e192d'
      }
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        indexHero: {
          words: ["Club", "Ideas", "Innovation", "Futures"],
          delay: 1,
          writeSpeed: 0.3,
          eraseSpeed: 0.15,
          pauseBetween: 1.5,
          caretColor: "#62c692",
          caretWidth: "6px",
          caretSpacing: "0.2em",
          blinkSpeed: 0.75,
        }
      }
    }),
  ],
}
