import { elThemePalette } from '../element-plus';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', '../../../src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    ...elThemePalette,
  },
};
