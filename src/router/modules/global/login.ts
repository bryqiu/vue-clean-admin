const login: CustomRouteRecordRaw = {
  path: '/login',
  component: () => import('@/views/login/login-container.vue'),
  name: 'Login',
  meta: {
    title: '登录页',
  },
};

export default login;
