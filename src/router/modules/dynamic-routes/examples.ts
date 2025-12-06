import { APP_LAYOUT } from '@/router/config';

const examplesRoutes: CustomRouteRecordRaw = {
  id: 1,
  path: '/examples',
  redirect: '/examples/element-plus',
  component: APP_LAYOUT,
  name: 'Examples',
  meta: {
    title: '示例简介',
    sort: 3,
    menuIcon: 'ri:presentation-line',
  },
  children: [
    {
      path: 'element-plus',
      name: 'ElementPlus',
      component: () => import('@/views/examples/element-plus.vue'),
      meta: {
        title: 'el 组件库',
        menuIcon: 'ri:code-s-slash-line',
      },
    },
    {
      path: 'auth',
      name: 'Auth',
      // component: () => import('@/views/examples/auth.vue'),
      meta: {
        title: 'RBAC 权限',
        menuIcon: 'ri:lock-2-line',
      },
    },
    {
      path: 'icon',
      name: 'Icon',
      component: () => import('@/views/examples/icon.vue'),
      meta: {
        title: '图标方案',
        menuIcon: 'mingcute:live-location-line',
      },
    },
    {
      path: 'i18n',
      name: 'I18n',
      component: () => import('@/views/examples/i18n.vue'),
      meta: {
        title: 'i18n 国际化',
        menuIcon: 'ri:translate-2',
      },
    },
    {
      path: 'list',
      name: 'List',
      component: () => import('@/views/examples/list.vue'),
      meta: {
        title: '列表管理',
        menuIcon: 'ri:table-3',
      },
    },
    {
      path: 'echarts',
      name: 'Echarts',
      // component: () => import('@/views/examples/echarts.vue'),
      meta: {
        title: 'Echarts 可视化',
        menuIcon: 'ri:bar-chart-2-line',
      },
    },
    {
      path: 'tailwindcss',
      name: 'Tailwindcss',
      component: () => import('@/views/examples/tailwindcss.vue'),
      meta: {
        title: 'Tailwind 原子样式',
        menuIcon: 'ri:color-filter-ai-line',
      },
    },
  ],
};

export default examplesRoutes;
