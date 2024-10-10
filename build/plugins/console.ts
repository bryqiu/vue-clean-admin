import type { PluginOption } from 'vite';
import TurboConsole from 'unplugin-turbo-console/vite';

/**
 * 控制台输出个性化配置
 * 启动编辑器报错请参阅：https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line
 * @see https://utc.yuy1n.io/
 */

export const consolePluginConfig = (): PluginOption => {
  return TurboConsole({
    /** 是否禁止启动编辑器 */
    disableLaunchEditor: true,
    /** 是否禁用日志功能 */
    disablePassLogs: true,
    // prefix: "====输出结果↓↓↓====",
  });
};
