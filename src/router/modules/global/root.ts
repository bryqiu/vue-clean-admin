import { ROOT_REDIRECT, ROUTE_NAMES } from '@/router/config';

const root: CustomRouteRecordRaw = {
  path: '/',
  redirect: ROOT_REDIRECT,
  name: ROUTE_NAMES.ROOT,
  meta: {
    title: '根目录',
  },
};

export default root;
