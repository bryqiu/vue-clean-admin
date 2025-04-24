import { extractRoutes, generateSortRoutes } from './helpers';
import type { ImportGlobRoutes } from './typing';
import { SortModeEnum } from '@/enums';
import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

/** 基础路由 */
const basicRoutes = import.meta.glob<ImportGlobRoutes>(['./modules/basic/**/*.ts'], {
  eager: true,
});

/** 动态路由 */
const dynamicRoutes = import.meta.glob<ImportGlobRoutes>(['./modules/business/**/*.ts'], {
  eager: true,
});

const globalRoutes = import.meta.glob<ImportGlobRoutes>(['./modules/global/**/*.ts'], {
  eager: true,
});

// 菜单路由表
export const menuRoutes = generateSortRoutes(
  [...extractRoutes(basicRoutes), ...extractRoutes(dynamicRoutes)],
  SortModeEnum.ASC,
);

/** 整体路由表 */
export const routes = [...extractRoutes(globalRoutes), ...menuRoutes];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/** 初始化路由 */
export function initRouter(app: App<Element>) {
  app.use(router);
}
