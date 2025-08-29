import type { ButtonProps } from 'element-plus';
interface ActionBtn extends Partial<ButtonProps> {
  btnText: string;
  onClick: () => void;
}

export interface AppDialogProps {
  /**
   * 标题
   * @default '标题'
   */
  title?: string;

  /**
   * Dialog 类名
   */
  dialogClass?: string;

  /**
   * 头部类名
   */
  headerClass?: string;

  /**
   * 底部类名
   */
  footerClass?: string;

  /**
   * 是否隐藏底部模块
   * @default false
   */

  hideFooter?: boolean;

  /**
   * 是否显示取消按钮
   * @default true
   */
  showCancelBtn?: boolean;
  /**
   * 是否显示确定按钮
   * @default true
   */
  showConfirmBtn?: boolean;
  /**
   * 确定按钮文本
   * @default '确定'
   */
  confirmBtnText?: string;
  /**
   * 取消按钮文本
   * @default '取消'
   */
  cancelBtnText?: string;
  /**
   * 确定按钮属性
   */
  confirmBtnProps?: Partial<ButtonProps>;
  /**
   * 取消按钮属性
   */
  cancelBtnProps?: Partial<ButtonProps>;
  /**
   * 操作按钮-配置项
   */
  actionBtns?: ActionBtn[];
  /**
   * 是否显示右上角关闭图标
   * @default true
   */
  showCloseIcon?: boolean;
}

export type AppDialogEmits = {
  /**
   * 点击关闭按钮的回调
   */
  (e: 'handleCancel'): void;
  /**
   * 点击确定按钮的回调
   */
  (e: 'handleConfirm'): void;
};
