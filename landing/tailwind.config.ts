import { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'reem-kufi': ['Reem Kufi', 'sans-serif'],
      },
      visibility: ['group-hover'],
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};

export default tailwindConfig;
