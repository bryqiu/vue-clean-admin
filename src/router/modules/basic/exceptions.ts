import { APP_LAYOUT, ROUTE_NAMES } from '@/router/config';

const exceptionPages: CustomRouteRecordRaw = {
  path: '/exception',
  name: ROUTE_NAMES.ERROR_PAGES,
  component: APP_LAYOUT,
  redirect: '/exception/404',
  meta: {
    title: '异常页',
    sort: 2,
    icon: 'ri:error-warning-line',
  },
  children: [
    {
      path: 'notFound',
      name: ROUTE_NAMES.NOT_FOUND,
      component: () => import('@/views/exceptions/not-found.vue'),
      meta: {
        title: '无页面(404)',
        icon: 'mdi:archive-search-outline',
      },
    },
    {
      path: 'forbidden',
      name: ROUTE_NAMES.FORBIDDEN,
      component: () => import('@/views/exceptions/forbidden.vue'),
      meta: {
        title: '访问受限(403)',
        icon: 'mdi:shield-off-outline',
      },
    },
    {
      path: 'serviceError',
      name: ROUTE_NAMES.SERVICE_ERROR,
      component: () => import('@/views/exceptions/service-error.vue'),
      meta: {
        title: '系统异常(500)',
        icon: 'mdi:server-off',
      },
    },
  ],
};

export default exceptionPages;
