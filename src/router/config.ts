export const APP_LAYOUT = () => import('@/layout/index.vue');

/** 根路径-重定向路径 */
export const ROOT_REDIRECT = '/dashboard';

/** 路由名称 */
export const ROUTE_NAMES = {
  /** 根路径 */
  ROOT: 'Root',
  /** 登录 */
  LOGIN: 'Login',
  /** 首页 */
  HOME: 'Home',
  /** 仪表盘 */
  DASHBOARD: 'Dashboard',
  /** 可视化 */
  ANALYTICS: 'Analytics',
  /** 错误页 */
  ERROR_PAGES: 'ErrorPages',
  /** 404 */
  NOT_FOUND: 'NotFound',
  /** 403 */
  FORBIDDEN: 'Forbidden',
  /** 500 */
  SERVER_ERROR: 'ServerError',
};
