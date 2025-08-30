const examplesRoutes: CustomRouteRecordRaw = {
  id: 1,
  path: '/examples',
  redirect: '/examples/element-plus',
  name: 'Examples',
  meta: {
    title: '基本示例',
    sort: 2,
    menuIcon: 'ri:magic-line',
  },
  children: [
    {
      id: 2,
      path: 'element-plus',
      name: 'ElementPlus',
      component: '/examples/element-plus',
      meta: {
        title: 'Element Plus',
        menuIcon: 'ri:instance-line',
      },
    },
  ],
};

export default examplesRoutes;
