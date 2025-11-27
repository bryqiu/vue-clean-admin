import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import type { ImportGlobRoutes } from './typing';
import { extractRoutes, generateSortRoutes } from './helpers';

const constantRoutes = extractRoutes(
  import.meta.glob<ImportGlobRoutes>(['./modules/constant-routes/**/*.ts'], {
    eager: true,
  }),
);

const systemRoutes = extractRoutes(
  import.meta.glob<ImportGlobRoutes>(['./modules/system-routes/**/*.ts'], {
    eager: true,
  }),
);

const dynamicRoutes = extractRoutes(
  import.meta.glob<ImportGlobRoutes>(['./modules/dynamic-routes/**/*.ts'], {
    eager: true,
  }),
);

const registerRoutes = [...constantRoutes, ...dynamicRoutes, ...systemRoutes];

const menuRoutes = generateSortRoutes([...constantRoutes, ...dynamicRoutes]);

const router = createRouter({
  history: createWebHashHistory(),
  routes: registerRoutes as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/** 初始化路由 */
function initRouter(app: App<Element>) {
  app.use(router);
}

export { router, initRouter, menuRoutes };
