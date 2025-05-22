import { APP_LAYOUT, ROOT_REDIRECT, ROUTE_NAMES } from '@/router/config';

const dashboard: CustomRouteRecordRaw = {
  path: ROOT_REDIRECT,
  redirect: `${ROOT_REDIRECT}/analytics`,
  component: APP_LAYOUT,
  name: ROUTE_NAMES.DASHBOARD,
  meta: {
    title: '仪表盘',
    sort: 1,
    icon: 'ri:dashboard-3-line',
  },
  children: [
    {
      path: 'analytics',
      name: ROUTE_NAMES.ANALYTICS,
      component: () => import('@/views/dashboard/analytics/analytics.vue'),
      meta: {
        title: '数据分析',
        icon: 'ri:donut-chart-fill',
      },
    },
  ],
};

export default dashboard;
