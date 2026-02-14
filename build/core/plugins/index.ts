import { configAutoImportPlugin } from './auto-import';
import { configComponentPlugin } from './components';
import { configCompressPlugin } from './compress';
import { configConsolePlugin } from './console';
import { configAppLoadingPlugin } from './loading';
import { configSvgIconPlugin } from './svg-icon';
import { configVisualizerPlugin } from './visualizer';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import tailwindcss from '@tailwindcss/vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import type { ResolveEnv } from '../typing';

export const createVitePlugins = (env: ResolveEnv, mode: string) => {
  const { VITE_ENABLE_BUILD_VISUALIZER, VITE_ENABLE_DEVTOOLS } = env;
  return [
    vue(),
    vueJsx(),
    tailwindcss(),
    configAutoImportPlugin(),
    configComponentPlugin(),
    configCompressPlugin(),
    configConsolePlugin(),
    configSvgIconPlugin(),
    configAppLoadingPlugin(mode),
    VITE_ENABLE_BUILD_VISUALIZER && configVisualizerPlugin(),
    VITE_ENABLE_DEVTOOLS && vueDevTools(),
  ].filter(Boolean);
};
