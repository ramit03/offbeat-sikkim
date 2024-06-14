import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      'primary': {
        50: '#e8f6f0',
        100: '#b8e4d1',
        200: '#95d7bb',
        300: '#65c59d',
        400: '#47ba89',
        500: '#19a96c',
        600: '#179a62',
        700: '#12784d',
        800: '#0e5d3b',
        900: '#0b472d',
      },
      'secondary': {
        50: '#f8fefa',
        100: '#e8fdee',
        200: '#ddfce6',
        300: '#cefbdb',
        400: '#c5fad4',
        500: '#b6f9c9',
        600: '#a6e3b7',
        700: '#81b18f',
        800: '#64896f',
        900: '#4c6954',
      },
      'accent': {
        50: '#fefeec',
        100: '#fcfdc4',
        200: '#fbfba7',
        300: '#f9fa7f',
        400: '#f8f966',
        500: '#f6f740',
        600: '#e0e13a',
        700: '#afaf2d',
        800: '#878823',
        900: '#67681b',
      },
      'light': {
        50: '#f8fcfa',
        100: '#e9f7f1',
        200: '#def3ea',
        300: '#cfede0',
        400: '#c6e9da',
        500: '#b8e4d1',
      
      },
      'dark': {
        400: '#3c6c57',
        500: '#0b472d',
        600: '#0a4129',
        700: '#083220',
        800: '#062719',
        900: '#051e13',
      }
     },
     fontFamily: {
      roboto: ['var(--font-roboto)', 'sans'],
      slab: ['var(--font-roboto-slab)', 'sans']
     }
    },
  },
  plugins: [],
};
export default config;
