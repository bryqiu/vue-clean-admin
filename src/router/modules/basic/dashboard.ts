import { LAYOUT } from '@/config';
import { ROOT_REDIRECT } from '@/config';
const dashboard: CustomRouteRecordRaw = {
  path: ROOT_REDIRECT,
  redirect: `${ROOT_REDIRECT}/analytics`,
  component: LAYOUT,
  name: 'Dashboard',
  meta: {
    title: '仪表盘',
    sort: 1,
    icon: 'ri:dashboard-3-line',
  },
  children: [
    {
      path: 'analytics',
      name: 'Analytics',
      component: () => import('@/views/dashboard/analytics/analytics.vue'),
      meta: {
        title: '可视化',
        icon: 'ri:donut-chart-fill',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@/views/dashboard/workbench/workbench.vue'),
      meta: {
        title: '工作台',
        icon: 'ri:computer-line',
      },
    },
  ],
};

export default dashboard;
