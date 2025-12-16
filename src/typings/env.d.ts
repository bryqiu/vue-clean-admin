/** 环境变量-类型定义及提示 */
interface ImportMetaEnv {
  /** 全局标题 */
  readonly VITE_APP_TITLE: string;
  /** 持久化存储前缀 */
  readonly VITE_STORE_PREFIX: string;
  /** 本地启动端口号 */
  readonly VITE_DEV_PORT: number;
  /** 本地启动时是否自动打开浏览器 */
  readonly VITE_DEV_BROWSER_OPEN: boolean;
  /** 打包后是否启用包分析可视化图 */
  readonly VITE_ENABLE_BUILD_VISUALIZER: boolean;

  /** 公共基础路径 */
  readonly VITE_BASE_PATH: string;
  /** API请求URL */
  readonly VITE_BASE_URL: string;
  /** 路径前缀 */
  readonly VITE_PATH_PREFIX: string;
  /** 是否启用 Vue DevTools */
  readonly VITE_ENABLE_DEVTOOLS: boolean;
  /** 应用版本 */
  readonly VITE_APP_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
