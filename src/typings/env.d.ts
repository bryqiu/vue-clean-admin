/** 环境变量-类型定义及提示 */
interface ImportMetaEnv {
  /** 全局标题 */
  readonly VITE_APP_TITLE: string;
  /** 持久化存储前缀 */
  readonly VITE_STORE_PREFIX: string;
  /** 本地开发-端口号 */
  readonly VITE_DEV_PORT: number;
  /** 预览-端口号 */
  readonly VITE_PREVIEW_PORT: number;
  /** 公共基础路径 */
  readonly VITE_BASE_PATH: string;
  /** 本地启动时是否自动打开浏览器 */
  readonly VITE_BROWSER_OPEN: boolean;
  /** 打包后是否显示包分析可视化 */
  readonly VITE_VISUALIZER: boolean;
  /** API请求URL */
  readonly VITE_BASE_URL: string;
  /** 路径前缀 */
  readonly VITE_PATH_PREFIX: string;
  /** 是否启用Mock */
  readonly VITE_USE_MOCK: boolean;
  /** 是否在控制台显示 Mock 请求日志 */
  readonly VITE_MOCK_LOG: boolean;
  /** 是否启用 Vue DevTools */
  readonly VITE_DEVTOOLS: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
