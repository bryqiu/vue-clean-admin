import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontSize: {},
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
