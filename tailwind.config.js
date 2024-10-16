import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontSize: {},
    },
    screens: {
      xs: '480px', // => @media (min-width: 480px) { ... }
      sm: '576px', // => @media (min-width: 576px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '992px', // => @media (min-width: 992px) { ... }
      xl: '1200px', // => @media (min-width: 1200px) { ... }
      xxl: '1600px', // => @media (min-width: 1600px) { ... }
    },
  },
  plugins: [
    // 支持iconify图标库的图标使用
    addDynamicIconSelectors(),
  ],
  corePlugins: {
    preflight: false, // 是否使用tailwind默认的重置css样式
  },
};
