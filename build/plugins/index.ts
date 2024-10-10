import type { PluginOption } from 'vite';

import vue from '@vitejs/plugin-vue';
// import eslint from "vite-plugin-eslint";
// import imagemin from "unplugin-imagemin/vite";
import vueDevTools from 'vite-plugin-vue-devtools';
import ElementPlus from 'unplugin-element-plus/vite';
import vueJsx from '@vitejs/plugin-vue-jsx'; // +新增

import { iconPluginConfig } from './svg-icon';
import { visualizerPluginConfig } from './visualizer';
import { compressionPluginConfig } from './compress';
import { autoImportPluginConfig } from './auto-import';
import { mockPluginConfig } from './mock';
import { consolePluginConfig } from './console';

/**
 * 配置 Vite 插件
 * @param env 环境变量对象
 * @returns 全部插件
 */
export const getPlugins = (env: ImportMetaEnv) => {
  const { VITE_VISUALIZER, VITE_USE_MOCK, VITE_MOCK_LOG, VITE_DEVTOOLS } = env;
  const plugins: PluginOption[] = [
    vue(),
    vueJsx(),
    // imagemin({ mode: "sharp", beforeBundle: true }),
    // eslint()

    // pluginConfig,
    ElementPlus({}),
    iconPluginConfig(),
    compressionPluginConfig(),
    autoImportPluginConfig(),
    mockPluginConfig(VITE_USE_MOCK, VITE_MOCK_LOG),
    consolePluginConfig(),
  ];

  VITE_VISUALIZER && plugins.push(visualizerPluginConfig());
  VITE_DEVTOOLS && plugins.push(vueDevTools());

  return plugins;
};
