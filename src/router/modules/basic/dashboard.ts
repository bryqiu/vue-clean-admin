import { LAYOUT } from '@/constants/index';
import { ROOT_REDIRECT } from '@/constants';

const dashboard: CustomRouteRecordRaw = {
  path: ROOT_REDIRECT,
  redirect: `${ROOT_REDIRECT}/analytics`,
  component: LAYOUT,
  name: 'Dashboard',
  meta: {
    title: '仪表盘',
    sort: 1,
    icon: 'ri:dashboard-2-line',
  },
  children: [
    {
      path: 'analytics',
      name: 'Analytics',
      component: () => import('@/views/dashboard/analytics/analytics.vue'),
      meta: {
        title: '可视化',
        icon: 'ri:bar-chart-2-line',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@/views/dashboard/workbench/workbench.vue'),
      meta: {
        title: '工作台',
        icon: 'ic:round-desktop-windows',
      },
    },
  ],
};

export default dashboard;
