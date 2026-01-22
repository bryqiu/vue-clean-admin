import { LAYOUT_COMPONENT, ROUTE_NAMES } from '@/router/config';

const dashboardRoutes: CustomRouteRecordRaw = {
  path: '/dashboard',
  redirect: `/dashboard/analytics`,
  component: LAYOUT_COMPONENT,
  name: ROUTE_NAMES.DASHBOARD,
  meta: {
    title: '仪表盘',
    sort: 1,
    menuIcon: 'ri:dashboard-3-line',
    hideParentIfSingleChild: true,
  },
  children: [
    {
      path: 'analytics',
      name: ROUTE_NAMES.ANALYTICS,
      component: () => import('@/views/dashboard/analytics/analytics.vue'),
      meta: {
        title: '数据分析',
        menuIcon: 'ri:bar-chart-line',
      },
    },
  ],
};

export default dashboardRoutes;
