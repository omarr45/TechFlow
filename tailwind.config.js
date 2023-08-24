/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // darkMode: 'media',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--color-background) / <alpha-value>)',
        text: 'hsl(var(--color-text) / <alpha-value>)',
        accent1: 'hsl(var(--color-accent1) / <alpha-value>)',
        accent2: 'hsl(var(--color-accent2) / <alpha-value>)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
