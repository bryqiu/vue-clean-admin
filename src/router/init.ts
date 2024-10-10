import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import type { App } from 'vue';
import { routes } from './index';

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
