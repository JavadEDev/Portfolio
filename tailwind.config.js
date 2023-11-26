/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          1: "rgb(var(--color-accent1) / <alpha-value>)",
          2: "rgb(var(--color-accent2) / <alpha-value>)",
        },
        bkg: "rgb(var(--color-bkg) / <alpha-value>)",
        bge: "rgb(var(--color-bge) / <alpha-value>)",
        ph: "rgb(var(--color-ph) / <alpha-value>)",
        content: "rgb(var(--color-content) / <alpha-value>)",
        border: {
          1: "rgb(var(--color-border1) / <alpha-value>)",
          2: "rgb(var(--color-border2) / <alpha-value>)",
          3: "rgb(var(--color-border3) / <alpha-value>)",
        },
        primary: colors.purple,
        secondary: colors.pink,
        other: colors.blue,
      },
      fontFamily: {
        roboto: ['"Roboto Mono"', 'monospace']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    
    react: {
      link: '#0178df',
      DEFAULT: '#7a0505'
    }
  },
  plugins: [],
}
