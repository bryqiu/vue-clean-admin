import { DisplayModeEnum } from '@/enums';

export interface BasicBoxProps {
  /**
   * 文本内容
   * @default --
   */
  text?: string;
  /**
   * 显示模式
   * @default horizontal
   */
  mode?: DisplayModeEnum | DisplayMode;
  /**
   * 提示内容
   */
  tipsContent?: string;
  /**
   * 是否显示边框
   * @default true
   */
  showBorder?: boolean;
}

export type ValueType = string | number | boolean;
type Option = (BaseOptions<ValueType> & { disabled?: boolean; [key: string]: any }) | string;

export interface ToggleBoxProps extends BasicBoxProps {
  /**
   * 选中项
   */
  modelValue: ValueType;
  /**
   * 选项列表
   */
  options: Option[];
  /**
   * 是否开启自动模式(优先级比mode属性低)
   * @default true
   */
  auto?: boolean;
  /**
   * 最大options长度
   * @default 3
   */
  maxLength?: number;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
}

export type ToggleBoxEmits = {
  'update:modelValue': [value: ValueType];
  segmentChange: [value: any];
};
