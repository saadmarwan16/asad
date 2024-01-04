import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#00CC5F',
          200: '#007B3A',
          300: '#005226',
          400: '#002913'
        },
        secondary: {
          100: '#3B67F7',
          200: '#051F76',
        },
        base: {
          100: '#FCFCFC',
          200: '#F2F7F7',
          300: '#E6EFEF',
          400: '#D2E3E3',
        },
        content: {
          100: '#333333',
          200: '#0A0A0A'
        }
      },
      screens: {
        '2xs': '320px',
        'xs': '475px',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
