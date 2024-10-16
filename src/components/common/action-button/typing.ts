import type { Placement as PlacementType } from 'element-plus';
import { ThemeModeEnum } from '@/enums';
export interface ActionButtonProps {
  /**
   * 提示内容
   */
  tipsContent?: string;

  /**
   * 提示的出现位置
   * @default bottom
   */
  tipsPlacement?: PlacementType;
  /**
   * 手动禁用提示
   * @default false
   */
  tipsDisabled?: boolean;

  /**
   * 主题模式
   * @default light
   */
  themeMode?: ThemeModeEnum;
  /**
   * 图标名称
   */
  icon: string;
  /**
   * 文本
   */
  text?: string;
  /**
   * 是否选中按钮
   * @default false
   */
  isActive?: boolean;
}
