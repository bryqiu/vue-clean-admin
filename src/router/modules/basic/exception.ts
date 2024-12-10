import { LAYOUT } from '@/config';

const exception: CustomRouteRecordRaw = {
  path: '/exception',
  name: 'Exception',
  component: LAYOUT,
  redirect: '/exception/404',
  meta: {
    title: '异常页',
    sort: 2,
    icon: 'ri:error-warning-line',
  },
  children: [
    {
      path: '404',
      name: '404',
      component: () => import('@/views/exception/exception-404.vue'),
      meta: {
        title: '404',
        icon: 'mdi:archive-search-outline',
      },
    },
    {
      path: '403',
      name: '403',
      component: () => import('@/views/exception/exception-403.vue'),
      meta: {
        title: '403',
        icon: 'mdi:shield-off-outline',
      },
    },
    {
      path: '500',
      name: '500',
      component: () => import('@/views/exception/exception-500.vue'),
      meta: {
        title: '500',
        icon: 'mdi:server-off',
      },
    },
  ],
};

export default exception;
