export interface AppDrawerProps {
  /**
   * 抽屉头部标题
   * @default '标题'
   */
  title?: string;
  /**
   * 是否隐藏底部
   * @default false
   */
  hideFooter?: boolean;
  /**
   * 是否显示取消按钮
   * @default true
   */
  showCancelBtn?: boolean;
  /**
   * 是否显示确认按钮
   * @default true
   */
  showConfirmBtn?: boolean;
  /**
   * 是否显示关闭图标
   * @default true
   */
  showCloseIcon?: boolean;
  /**
   * 取消按钮文本
   * @default '取消'
   */
  cancelBtnText?: string;
  /**
   * 确认按钮文本
   * @default '确定'
   */
  confirmBtnText?: string;
}
