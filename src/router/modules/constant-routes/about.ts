import { APP_LAYOUT, ROUTE_NAMES } from '@/router/config';

const aboutRoutes: CustomRouteRecordRaw = {
  path: '/about',
  redirect: `/about/home`,
  component: APP_LAYOUT,
  name: ROUTE_NAMES.ABOUT,
  meta: {
    title: '关于',
    sort: 99,
    menuIcon: 'ri:information-2-line',
  },
  children: [
    {
      path: 'home',
      name: ROUTE_NAMES.ABOUT_HOME,
      component: () => import('@/views/about/home.vue'),
      meta: {
        title: '关于项目',
        menuIcon: 'ri:information-2-line',
      },
    },
  ],
};

export default aboutRoutes;
