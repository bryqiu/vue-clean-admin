import type { RouteRecordRaw } from 'vue-router';
import { ROOT_PATH, ROUTE_NAMES } from '@/router/config';

const rootRoutes: RouteRecordRaw = {
  path: '/',
  name: ROUTE_NAMES.ROOT,
  redirect: ROOT_PATH,
  meta: {
    title: '根目录',
  },
};

export default rootRoutes;
