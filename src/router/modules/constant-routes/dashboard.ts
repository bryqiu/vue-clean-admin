import { APP_LAYOUT, ROUTE_NAMES } from '@/router/config';

const dashboardRoutes: CustomRouteRecordRaw = {
  path: '/dashboard',
  redirect: `/dashboard/analytics`,
  component: APP_LAYOUT,
  name: ROUTE_NAMES.DASHBOARD,
  meta: {
    title: '仪表盘',
    sort: 1,
    menuIcon: 'ri:dashboard-2-line',
  },
  children: [
    {
      path: 'analytics',
      name: ROUTE_NAMES.ANALYTICS,
      component: () => import('@/views/dashboard/analytics/analytics.vue'),
      meta: {
        title: '数据分析',
        menuIcon: 'ri:bar-chart-box-ai-line',
      },
    },
  ],
};

export default dashboardRoutes;
