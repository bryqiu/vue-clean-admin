import { APP_LAYOUT, ROUTE_NAMES } from '@/router/config';

const aboutRoutes: CustomRouteRecordRaw = {
  path: '/about',
  redirect: `/about/index`,
  component: APP_LAYOUT,
  name: ROUTE_NAMES.ABOUT,
  meta: {
    title: '关于',
    sort: 99,
    menuIcon: 'ri:information-line',
    hideParentIfSingleChild: true, // 当只有一个子菜单时，隐藏父级菜单直接显示子菜单内容
  },
  children: [
    {
      path: 'project',
      name: ROUTE_NAMES.ABOUT_PROJECT,
      component: () => import('@/views/about/project.vue'),
      meta: {
        title: '关于项目',
        menuIcon: 'ri:copyright-line',
      },
    },
  ],
};

export default aboutRoutes;
