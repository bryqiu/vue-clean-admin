import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import type { ImportGlobRoutes } from './typing';
import { extractRoutes } from './helpers';
import { afterEachGuard, beforeEachGuard } from './guards';

/** 静态路由 */
const staticRoutes = extractRoutes(
  import.meta.glob<ImportGlobRoutes>(['./modules/constant-routes/**/*.ts'], {
    eager: true,
  }),
);

/** 系统路由 */
const systemRoutes = extractRoutes(
  import.meta.glob<ImportGlobRoutes>(['./modules/system-routes/**/*.ts'], {
    eager: true,
  }),
);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRoutes, ...systemRoutes] as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

beforeEachGuard(router);
afterEachGuard(router);

/** 初始化路由 */
function initRouter(app: App<Element>) {
  app.use(router);
}

export { router, initRouter, staticRoutes };
