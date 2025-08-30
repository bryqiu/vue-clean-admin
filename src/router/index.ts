import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import type { ImportGlobRoutes } from './typing';
import { extractRoutes, generateSortRoutes } from './helpers';

const originConstantRoutes = import.meta.glob<ImportGlobRoutes>(
  ['./modules/constant-routes/**/*.ts'],
  {
    eager: true,
  },
);

const originSystemRoutes = import.meta.glob<ImportGlobRoutes>(['./modules/system-routes/**/*.ts'], {
  eager: true,
});

/**
 * 固定路由，系统固有的路由，会展示在菜单栏
 */
const constantRoutes = generateSortRoutes(extractRoutes(originConstantRoutes));

/**
 * 系统路由，不需要显示在菜单栏
 */
const systemRoutes = extractRoutes(originSystemRoutes);

const routes = constantRoutes.concat(systemRoutes);

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/** 初始化路由 */
function initRouter(app: App<Element>) {
  app.use(router);
}

export { router, initRouter, constantRoutes };
