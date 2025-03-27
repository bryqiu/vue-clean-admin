import { ROUTE_NAMES } from '@/router/config';

const login: CustomRouteRecordRaw = {
  path: '/login',
  component: () => import('@/views/login/login-container.vue'),
  name: ROUTE_NAMES.LOGIN,
  meta: {
    title: '登录页',
  },
};

export default login;
