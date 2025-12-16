import Components from 'unplugin-vue-components/vite';
import type { PluginOption } from 'vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { PlusProComponentsResolver } from '@plus-pro-components/resolver';

export const configComponentPlugin = (): PluginOption => {
  return Components({
    dirs: [],
    globs: [],
    extensions: ['vue', 'tsx'],
    /**
     * 解析器
     * ElementPlusResolver - Element Plus 解析器
     * PlusProComponentsResolver - PlusProComponents 解析器
     */
    resolvers: [ElementPlusResolver({ importStyle: 'sass' }), PlusProComponentsResolver()],
    dts: 'src/typings/components.d.ts', // 自定义生成 components.d.ts 路径
  });
};
