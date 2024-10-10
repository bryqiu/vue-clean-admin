/** ======================== router ======================== */

export const LAYOUT = () => import('@/layout/index.vue');

/** 根路径-重定向路径 */
export const ROOT_REDIRECT = '/dashboard';

/** ======================== store ======================== */

/** Store持久化存储-前缀命名 */
export const STORE_PREFIX: string = 'app';
