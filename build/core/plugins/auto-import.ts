import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import type { PluginOption } from 'vite';
import { pathResolve } from '../helpers';

export const configAutoImportPlugin = (): PluginOption => {
  return AutoImport({
    imports: [
      {
        '@/store/modules/settings': ['useSettingsStore'],
        '@/store/modules/user': ['useUserStore'],
        '@/components/systems/settings/use-setting-state': ['useSettingState'],
        '@/components/systems/notifications/use-notification-state': ['useNotificationState'],
        'element-plus': ['ElMessage', 'ElMessageBox', 'ElLoading'],
      },
    ],
    dirs: [`${pathResolve('src/hooks')}`, `${pathResolve('src/store/hooks')}`],
    dts: `src/typings/auto-imports.d.ts`, // 自定义生成 auto-imports.d.ts 文件路径
    resolvers: [ElementPlusResolver()],
    eslintrc: {
      enabled: true,
      filepath: `${pathResolve('.eslintrc-auto-import.mjs')}`,
      globalsPropValue: true,
    },
  });
};
