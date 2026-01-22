import { LAYOUT_COMPONENT } from '@/router/config';

const marketRoutes: CustomRouteRecordRaw = {
  path: '/market',
  redirect: '/market/ai',
  component: LAYOUT_COMPONENT,
  name: 'Market',
  meta: {
    title: '物料市场',
    sort: 4,
    menuIcon: 'ri:shopping-bag-3-line',
  },
  children: [
    {
      path: 'ai',
      name: 'MarketAI',
      // component: () => import('@/views/market/ai/index.vue'),
      meta: {
        title: 'AI 模板',
        menuIcon: 'ri:robot-line',
      },
    },
    {
      path: 'paid',
      name: 'MarketPaid',
      // component: () => import('@/views/market/paid/index.vue'),
      meta: {
        title: '付费模板',
        menuIcon: 'ri:money-dollar-circle-line',
      },
    },
    {
      path: 'code',
      name: 'MarketCode',
      // component: () => import('@/views/market/code/index.vue'),
      meta: {
        title: '代码模板',
        menuIcon: 'ri:code-s-slash-line',
      },
    },
  ],
};

export default marketRoutes;
