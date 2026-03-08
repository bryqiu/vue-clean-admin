import type { ValueOf } from '../types';

/**
 * 通用状态枚举
 */
export const STATUS_ENUM = {
  ENABLE: 1,
  CLOSE: 0,
} as const;

/** 状态枚举值联合类型 */
export type StatusEnumValue = ValueOf<typeof STATUS_ENUM>;

/**
 * 性别枚举
 */
export const GENDER_ENUM = {
  MALE: 1,
  FEMALE: 0,
} as const;

/** 性别枚举值联合类型 */
export type GenderEnumValue = ValueOf<typeof GENDER_ENUM>;

/**
 * 表单模式枚举
 */
export const FORM_TYPE_ENUM = {
  ADD: 'add',
  EDIT: 'edit',
  DETAIL: 'detail',
} as const;

/** 表单模式枚举值联合类型 */
export type FormTypeEnumValue = ValueOf<typeof FORM_TYPE_ENUM>;

/**
 * 树结构表单枚举
 */
export const TREE_FORM_TYPE_ENUM = {
  ...FORM_TYPE_ENUM,
  ADD_CHILD: 'addChild',
} as const;

/** 树结构表单枚举值联合类型 */
export type TreeFormTypeEnumValue = ValueOf<typeof TREE_FORM_TYPE_ENUM>;

/**
 * 排序方式枚举
 */
export const SORT_MODE_ENUM = {
  DESC: 'desc',
  ASC: 'asc',
} as const;

/** 排序方式枚举值联合类型。 */
export type SortModeEnumValue = ValueOf<typeof SORT_MODE_ENUM>;

/**
 * 权限路由类型枚举
 */
export const PERMISSION_ROUTE_TYPE_ENUM = {
  DIR: 'dir',
  MENU: 'menu',
  ACTION: 'action',
  LINK: 'link',
} as const;

/** 权限路由类型枚举值联合类型 */
export type PermissionRouteTypeEnumValue = ValueOf<typeof PERMISSION_ROUTE_TYPE_ENUM>;

/** 路由名称 */
export const ROUTE_NAMES = {
  /** 根路径 */
  ROOT: 'Root',
  /** 仪表盘 */
  DASHBOARD: 'Dashboard',
  /** 数据分析 */
  ANALYTICS: 'Analytics',
  /** 错误页 */
  ERROR_PAGES: 'ErrorPages',
  /** 404 */
  NOT_FOUND: 'NotFound',
  /** 403 */
  FORBIDDEN: 'Forbidden',
  /** 500 */
  SERVICE_ERROR: 'ServiceError',
  /** 关于 */
  ABOUT: 'About',
  /** 关于项目 */
  ABOUT_PROJECT: 'AboutProject',

  /** 示例 */
  EXAMPLES: 'Examples',
  /** 示例 Element Plus */
  ELEMENT_PLUS: 'ElementPlus',

  /** 登录 */
  AUTH: 'Auth',
  /** 账号登录 */
  ACCOUNT_LOGIN: 'AccountLogin',
  /** 短信登录 */
  SMS_LOGIN: 'SmsLogin',
  /** 扫码登录 */
  QR_LOGIN: 'QrLogin',
  /** 忘记密码 */
  FORGOT_PASSWORD: 'ForgotPassword',
  /** 注册 */
  REGISTER: 'Register',
} as const;

export type RouteNames = ValueOf<typeof ROUTE_NAMES>;
