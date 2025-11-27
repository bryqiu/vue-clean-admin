import type { AuthModeProps } from './components';
import { ROUTE_NAMES } from '@/router/config';

export const AUTH_INFO_MAP = {
  ACCOUNT: {
    title: '👋 新的旅程，从这里出发',
    subTitle: '欢迎使用 Clean Admin，输入账号信息以继续',
  },
  SMS: {
    title: '手机验证码登录',
    subTitle: '输入手机号，获取验证码快速登录',
  },
  QR: {
    title: '扫码登录',
    subTitle: '打开手机 App 扫描二维码，安全便捷登录',
  },
  FORGOT_PASSWORD: {
    title: '找回密码',
    subTitle: '输入账号信息，我们将帮助您重置密码',
  },
  REGISTER: {
    title: '创建账号',
    subTitle: '填写基本信息，开启您的专属之旅',
  },
} as const;

export const AUTH_MODE_LIST: AuthModeProps['authModeList'] = [
  {
    label: '短信',
    routeName: ROUTE_NAMES.SMS_LOGIN,
    icon: 'ri:chat-smile-ai-line',
  },
  {
    label: '二维码',
    routeName: ROUTE_NAMES.QR_LOGIN,
    icon: 'ri:qr-code-line',
  },
  {
    label: '邮箱',
    routeName: ROUTE_NAMES.EMAIL_LOGIN,
    icon: 'ri:mail-ai-line',
  },
];
