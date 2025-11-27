import { ROUTE_NAMES } from '@/router/config';

const exceptionRoutes: CustomRouteRecordRaw = {
  path: '/exception',
  name: ROUTE_NAMES.ERROR_PAGES,
  redirect: '/exception/notFound',
  meta: {
    title: '异常页',
    sort: 2,
    menuIcon: 'ri:error-warning-line',
  },
  children: [
    {
      path: 'notFound',
      name: ROUTE_NAMES.NOT_FOUND,
      component: () => import('@/views/exceptions/not-found.vue'),
      meta: {
        title: '无页面(404)',
        menuIcon: 'ri:file-search-line',
      },
    },
    {
      path: 'forbidden',
      name: ROUTE_NAMES.FORBIDDEN,
      component: () => import('@/views/exceptions/forbidden.vue'),
      meta: {
        title: '访问受限(403)',
        menuIcon: 'ri:forbid-line',
      },
    },
    {
      path: 'serviceError',
      name: ROUTE_NAMES.SERVICE_ERROR,
      component: () => import('@/views/exceptions/service-error.vue'),
      meta: {
        title: '系统异常(500)',
        menuIcon: 'ri:bug-line',
      },
    },
  ],
};

export default exceptionRoutes;
