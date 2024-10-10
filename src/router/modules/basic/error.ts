import { LAYOUT } from '@/constants/index';

const root: CustomRouteRecordRaw = {
  path: '/error',
  name: 'Error',
  component: LAYOUT,
  redirect: '/error/404',
  meta: {
    title: '错误页面',
    sort: 2,
  },
  children: [
    {
      path: '404',
      name: '404',
      component: () => import('@/views/error/error-404.vue'),
      meta: {
        title: '404错误页',
      },
    },
    {
      path: '403',
      name: '403',
      component: () => import('@/views/error/error-404.vue'),
      meta: {
        title: '403错误页',
      },
    },
    {
      path: '500',
      name: '500',
      component: () => import('@/views/error/error-500.vue'),
      meta: {
        title: '500错误页',
      },
    },
  ],
};

export default root;
