import type { ConfigEnv, UserConfig } from 'vite';
import { defineConfig, mergeConfig } from 'vite';
import {
  createAliasesConfig,
  createBuildConfig,
  createOptimizeConfig,
  createServerConfig,
} from './configs';
import { createVitePlugins } from './plugins';
import { resolveEnv } from './helpers';

interface ViteConfigOptions {
  overrides: Partial<UserConfig>;
}

export const defineViteConfig = (options: ViteConfigOptions = { overrides: {} }) => {
  return defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const env = resolveEnv(mode);
    const { VITE_BASE_PATH } = env;

    const presetConfig: UserConfig = {
      base: VITE_BASE_PATH,
      plugins: createVitePlugins(env, mode),
      optimizeDeps: createOptimizeConfig(),
      resolve: {
        alias: createAliasesConfig(),
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
      server: createServerConfig(),
      preview: {
        port: 4485,
      },
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler',
          },
        },
      },
      build: createBuildConfig(),
    };

    return mergeConfig(presetConfig, options.overrides || {});
  });
};
