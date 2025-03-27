import { APP_LAYOUT, ROUTE_NAMES } from '@/router/config';

const errorPages: CustomRouteRecordRaw = {
  path: '/error',
  name: ROUTE_NAMES.ERROR_PAGES,
  component: APP_LAYOUT,
  redirect: '/error/404',
  meta: {
    title: '错误页',
    sort: 2,
    icon: 'ri:error-warning-line',
  },
  children: [
    {
      path: '404',
      name: ROUTE_NAMES.NOT_FOUND,
      component: () => import('@/views/errors/not-found.vue'),
      meta: {
        title: '404',
        icon: 'mdi:archive-search-outline',
      },
    },
    {
      path: '403',
      name: ROUTE_NAMES.FORBIDDEN,
      component: () => import('@/views/errors/forbidden.vue'),
      meta: {
        title: '403',
        icon: 'mdi:shield-off-outline',
      },
    },
    {
      path: '500',
      name: ROUTE_NAMES.SERVER_ERROR,
      component: () => import('@/views/errors/server-error.vue'),
      meta: {
        title: '500',
        icon: 'mdi:server-off',
      },
    },
  ],
};

export default errorPages;
