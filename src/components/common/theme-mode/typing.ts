export enum shapeEnum {
  /** 横向 */
  SEGMENTED_HORIZONTAL,
  /** 竖向 */
  SEGMENTED_VERTICAL,
  /** 按钮 */
  ACTION_BUTTON,
}

export interface ThemeModeProps {
  /**
   * 外形
   * @default SEGMENTED_HORIZONTAL(横向)
   */
  shape: shapeEnum;
}
