import { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'reem-kufi': ['Reem Kufi', 'sans-serif'],
      },
      // Add your custom CSS here
      visibility: ['group-hover'],
    },
  },
  variants: {
    extend: {
      // Add the group-hover variants
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};

export default tailwindConfig;
