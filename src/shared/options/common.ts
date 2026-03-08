import type { Options } from '../types';
import { GENDER_ENUM, ROUTE_NAMES } from '../enums';
import type { GenderEnumValue, RouteNames } from '../enums';

/** 支持的语言选项 */
export const SUPPORT_LOCAL_OPTION: Options<SupportedLocales, { icon: string }> = [
  {
    label: '简体中文',
    value: 'zh-CN',
    icon: 'circle-flags:cn',
  },
  {
    label: 'English',
    value: 'en',
    icon: 'circle-flags:us',
  },
] as const;

/** 性别选项 */
export const GENDER_OPTION: Options<GenderEnumValue> = [
  {
    label: '男',
    value: GENDER_ENUM.MALE,
  },
  {
    label: '女',
    value: GENDER_ENUM.FEMALE,
  },
] as const;

/** 登录方式选项 */
export const AUTH_MODE_OPTION: Options<RouteNames, { icon: string }> = [
  {
    label: '短信登录',
    value: ROUTE_NAMES.SMS_LOGIN,
    icon: 'ri:chat-smile-ai-line',
  },
  {
    label: '扫码登录',
    value: ROUTE_NAMES.QR_LOGIN,
    icon: 'ri:qr-code-line',
  },
];
