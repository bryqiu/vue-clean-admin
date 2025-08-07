import { APP_LAYOUT, ROOT_REDIRECT, ROUTE_NAMES } from '@/router/config';

const about: CustomRouteRecordRaw = {
  path: '/about',
  component: APP_LAYOUT,
  name: ROUTE_NAMES.ABOUT,
  meta: {
    title: '关于',
    sort: 99,
  },
  children: [
    {
      path: 'project',
      name: ROUTE_NAMES.ABOUT_PROJECT,
      component: () => import('@/views/about/about-project.vue'),
      meta: {
        title: '关于项目',
        icon: 'ri:information-2-line',
      },
    },
  ],
};

export default about;
