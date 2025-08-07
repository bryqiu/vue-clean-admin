import { APP_LAYOUT, ROUTE_NAMES } from '@/router/config';

const examples: CustomRouteRecordRaw = {
  path: '/examples',
  component: APP_LAYOUT,
  redirect: '/examples/element-plus',
  name: ROUTE_NAMES.EXAMPLES,
  meta: {
    title: '基本示例',
    sort: 2,
    icon: 'ri:magic-line',
  },
  children: [
    {
      path: 'element-plus',
      name: ROUTE_NAMES.ELEMENT_PLUS,
      component: () => import('@/views/examples/element-plus.vue'),
      meta: {
        title: 'Element Plus',
        icon: 'ri:instance-line',
      },
    },
  ],
};

export default examples;
