import { defineComponent, h } from 'vue';
import { RouterView } from 'vue-router';
import { ROUTE_NAMES } from '../enums';

/** 路由默认首页 */
export const DEFAULT_HOME_ROUTE = '/dashboard';

/** 根路径-重定向路径 */
export const ROOT_PATH = '/dashboard/analytics';

/** 主布局组件 */
export const LAYOUT_COMPONENT = () => import('@/layout/index.vue');

/** 认证页布局组件 */
export const AUTH_LAYOUT = () => import('@/views/auth/auth.vue');

/** Views 文件夹页面模块映射（用于动态路由组件解析） */
export const VIEWS_MODULES = import.meta.glob('/src/views/**/*.vue');

/** 404 页面组件 */
export const NOT_FOUND_COMPONENT = () => import('@/views/exceptions/not-found.vue');

/** 动态路由组件兜底（当 component 字段无法匹配到页面时展示） */
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

/** 父级路由占位组件 */
export const PARENT_LAYOUT = defineComponent({
  name: 'ParentLayout',
  setup() {
    return () => h(RouterView);
  },
});

/** 全局 404 路由配置 */
export const NOT_FOUND_ROUTE = {
  path: '/:pathMatch(.*)*',
  name: ROUTE_NAMES.NOT_FOUND,
  component: NOT_FOUND_COMPONENT,
  meta: {
    title: '404 未找到',
    hideMenu: true,
  },
};
