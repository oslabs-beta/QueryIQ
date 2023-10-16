import { type Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'reem-kufi': ['Reem Kufi', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
