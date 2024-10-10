import type { PluginOption } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

/**
 * 配置 Mock 插件
 * @param enable 是否启用 Mock
 * @param logger 是否在控制台显示请求日志
 */
export const mockPluginConfig = (enable: boolean, logger: boolean): PluginOption => {
  return viteMockServe({
    enable,
    logger,
  });
};
