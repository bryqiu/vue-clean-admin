import type { AuthInfo } from '@/views/auth/components/auth-container.vue';

/** 默认主题色 */
export const DEFAULT_PRIMARY_COLOR = '#3b82f6';

/** 默认语言 */
export const DEFAULT_LOCALE: SupportedLocales = 'zh-CN';

/** 认证登录-基本信息 */
export const AUTH_INFO: { [key: string]: AuthInfo } = {
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

/** 系统设置-关于页 */
export const RESOURCE_ITEMS: { label: string; text: string; desc: string; url: string }[] = [
  {
    label: '代码仓库',
    text: 'github.com/bryqiu/vue-clean-admin',
    desc: '获取源码与版本信息',
    url: 'https://github.com/bryqiu/vue-clean-admin',
  },
  {
    label: '问题反馈',
    text: 'Issues',
    desc: '提交问题与功能建议',
    url: 'https://github.com/bryqiu/vue-clean-admin/issues/new',
  },
  {
    label: '更新日志',
    text: 'Releases',
    desc: '查看更新日志与版本历史',
    url: 'https://github.com/bryqiu/vue-clean-admin/releases',
  },
  {
    label: '建设指南',
    text: '《中后台系统建设指南专栏》',
    desc: '落地思路与最佳实践',
    url: 'https://github.com/bryqiu/Blog',
  },
] as const;

export const REGEX = {
  /** 地址正则 */
  LINK_URL:
    /^(?:https?|ftp):\/\/(?:\S+@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[01])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4])|(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9](?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9])*\.[a-z\u00a1-\uffff]{2,})(?::\d{2,5})?(?:\/\S*)?$/,
  /** 邮箱正则 */
  EMAIL_REG: /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
  /** 密码强度正则(以字母开头，长度在6~18之间，只能包含字母、数字和下划线) */
  PASSWORD_STRENGTH: /^[a-z]\w{5,17}$/i,
  /** 邮政编码正则(中国大陆邮政编码为6位数字) */
  POSTAL_CODE: /[1-9]\d{5}(?!\d)/,
  /** 正整数正则 */
  POSITIVE_INTEGER: /^[1-9]\d*$/,
} as const;
