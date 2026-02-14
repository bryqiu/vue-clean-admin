import type { PluginOption } from 'vite';
import { loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const DEFAULT_LOADING_TEMPLATE = 'build/loading.html';
const SETTINGS_STORE_ID = 'settings';

const loadLoadingTemplate = (loadingTemplate: string) => {
  const templatePath = resolve(process.cwd(), loadingTemplate);

  if (!existsSync(templatePath)) {
    return '';
  }

  return readFileSync(templatePath, 'utf8');
};

const createThemeScript = (storeKey: string) => {
  return `
(function () {
  try {
    var raw = localStorage.getItem('${storeKey}');
    var data = raw ? JSON.parse(raw) : null;
    var theme =
      (data && data.appSettings && data.appSettings.theme && data.appSettings.theme.currentThemeMode) ||
      (data && data.theme && data.theme.currentThemeMode) ||
      '';
    var isDark = theme === 'dark';
    if (theme === 'system') {
      isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    document.documentElement.classList.toggle('dark', isDark);
  } catch (error) {}
})();
`;
};

const formatStoreKey = (prefix: string, id: string, version: string) => {
  return `__${prefix}__${id}__${version}`.toUpperCase();
};

const configAppLoadingPlugin = (
  mode: string,
  loadingTemplate: string = DEFAULT_LOADING_TEMPLATE,
): PluginOption[] => {
  const loadingHtml = loadLoadingTemplate(loadingTemplate);
  const env = loadEnv(mode, process.cwd());
  const storePrefix = env.VITE_STORE_PREFIX || 'app';
  const appVersion = env.VITE_APP_VERSION || '0.0.0';
  const storeKey = formatStoreKey(storePrefix, SETTINGS_STORE_ID, appVersion);

  return createHtmlPlugin({
    inject: {
      data: {
        appLoadingHtml: loadingHtml,
      },
      tags: [
        {
          tag: 'script',
          attrs: {
            'data-app-loading': 'inject-js',
          },
          children: createThemeScript(storeKey),
          injectTo: 'head-prepend',
        },
      ],
    },
  });
};

export { configAppLoadingPlugin };
