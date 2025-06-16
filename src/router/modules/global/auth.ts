import { AUTH_LAYOUT, ROUTE_NAMES } from '@/router/config';

const auth: CustomRouteRecordRaw = {
  path: '/auth',
  name: ROUTE_NAMES.AUTH,
  component: AUTH_LAYOUT,
  meta: {
    title: '认证',
  },
  redirect: '/auth/account',
  children: [
    {
      path: 'account',
      name: 'AccountLogin',
      component: () => import('@/views/auth/page/account-login.vue'),
      meta: {
        title: '账号登录',
      },
    },
    {
      path: 'sms',
      name: 'SmsLogin',
      component: () => import('@/views/auth/page/sms-login.vue'),
      meta: {
        title: '短信登录',
      },
    },
    {
      path: 'qr-code',
      name: 'QrLogin',
      component: () => import('@/views/auth/page/qr-login.vue'),
      meta: {
        title: '扫码登录',
      },
    },
    {
      path: 'forgot-password',
      name: 'ForgotPassword',
      component: () => import('@/views/auth/page/forgot-password.vue'),
      meta: {
        title: '忘记密码',
      },
    },
    {
      path: 'register',
      name: 'Register',
      component: () => import('@/views/auth/page/register.vue'),
      meta: {
        title: '注册账号',
      },
    },
  ],
};

export default auth;
