import { FORM_TYPE_ENUM, STATUS_ENUM } from '../enums';
import type { FormTypeEnumValue, StatusEnumValue } from '../enums';
import type { Options } from '../types';

/** 启停状态选项 */
export const STATUS_OPTION: Options<StatusEnumValue> = [
  { label: '开启', value: STATUS_ENUM.ENABLE },
  { label: '关闭', value: STATUS_ENUM.CLOSE },
] as const;

/** 表单模式选项 */
export const FORM_TYPE_OPTION: Options<FormTypeEnumValue> = [
  { label: '新增', value: FORM_TYPE_ENUM.ADD },
  { label: '编辑', value: FORM_TYPE_ENUM.EDIT },
  { label: '详情', value: FORM_TYPE_ENUM.DETAIL },
] as const;

/** 布尔开关选项（开启/关闭） */
export const SWITCH_OPTION: Options<boolean> = [
  { label: '开启', value: true },
  { label: '关闭', value: false },
] as const;

/** 布尔判断选项（是/否） */
export const WHETHER_OPTION: Options<boolean> = [
  { label: '是', value: true },
  { label: '否', value: false },
] as const;

/** 显示控制选项（显示/隐藏） */
export const SHOW_OPTION: Options<boolean> = [
  { label: '显示', value: true },
  { label: '隐藏', value: false },
] as const;
