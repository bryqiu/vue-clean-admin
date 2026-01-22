import { defineComponent, h } from 'vue';
import { RouterView } from 'vue-router';

export const LAYOUT_COMPONENT = () => import('@/layout/index.vue');

export const AUTH_LAYOUT = () => import('@/views/auth/auth.vue');

export const VIEWS_MODULES = import.meta.glob('../views/**/*.vue');

export const NOT_FOUND_COMPONENT = () => import('@/views/exceptions/not-found.vue');

export const NOT_COMPONENT = defineComponent({
  name: 'NoComponent',
  setup() {
    return () =>
      h(
        'div',
        {
          style: {
            padding: '1rem',
            backgroundColor: 'var(--el-fill-color-light)',
            borderRadius: 'var(--radius)',
            fontSize: '14px',
          },
        },
        [
          h(
            'span',
            {
              style: {
                color: 'var(--el-text-color-secondary)',
              },
            },
            '× 组件加载失败！请检查后端返回的 component 字段与 views 目录下的文件路径是否匹配',
          ),
        ],
      );
  },
});

// <router-view /> 容器
export const PARENT_LAYOUT = defineComponent({
  name: 'ParentLayout',
  setup() {
    return () => h(RouterView);
  },
});

/** 根路径-重定向路径 */
export const ROOT_PATH = '/dashboard/analytics';

/** 路由名称 */
export const ROUTE_NAMES = {
  /** 根路径 */
  ROOT: 'Root',
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
  /** 关于 */
  ABOUT: 'About',
  /** 关于项目 */
  ABOUT_PROJECT: 'AboutProject',

  /** 示例 */
  EXAMPLES: 'Examples',
  /** 示例 Element Plus */
  ELEMENT_PLUS: 'ElementPlus',

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

export const NOT_FOUND_ROUTE = {
  path: '/:pathMatch(.*)*',
  name: ROUTE_NAMES.NOT_FOUND,
  component: NOT_FOUND_COMPONENT,
  meta: {
    title: '404 未找到',
    hideMenu: true,
  },
};
