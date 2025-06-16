export const APP_LAYOUT = () => import('@/layout/index.vue');

export const AUTH_LAYOUT = () => import('@/views/auth/auth-layout.vue');

/** 根路径-重定向路径 */
export const ROOT_REDIRECT = '/dashboard';

/** 路由名称 */
export const ROUTE_NAMES = {
  /** 根路径 */
  ROOT: 'Root',
  /** 首页 */
  HOME: 'Home',
  /** 仪表盘 */
  DASHBOARD: 'Dashboard',
  /** 数据分析 */
  ANALYTICS: 'Analytics',
  /** 错误页 */
  ERROR_PAGES: 'ErrorPages',
  /** 404 */
  NOT_FOUND: 'NotFound',
  /** 403 */
  FORBIDDEN: 'Forbidden',
  /** 500 */
  SERVICE_ERROR: 'ServiceError',

  /** 登录 */
  AUTH: 'Auth',
  /** 账号登录 */
  ACCOUNT_LOGIN: 'AccountLogin',
  /** 短信登录 */
  SMS_LOGIN: 'SmsLogin',
  /** 扫码登录 */
  QR_LOGIN: 'QrLogin',
  /** 忘记密码 */
  FORGOT_PASSWORD: 'ForgotPassword',
  /** 注册 */
  REGISTER: 'Register',
} as const;
