import type { DialogFooterBtnProps, DialogProps } from '@/components/common/app-dialog';
import type {
  ElementPlusFormProps,
  IntrinsicAttributes,
  PlusFormSelfProps,
} from 'plus-pro-components';
import type { ButtonProps, DialogProps as ElementDialogProps } from 'element-plus';

export interface FormDialogProps {
  /**
   * dialog 属性
   */
  dialogProps?: DialogProps &
    Partial<Omit<ElementDialogProps, 'title' | 'modelValue' | 'closeIcon' | 'showClose'>>;
  /**
   * dialog 底部按钮属性
   */
  dialogBtnProps?: Omit<DialogFooterBtnProps, 'actionBtns'> & {
    /**
     * 是否显示重置按钮
     * @default true
     */
    showResetBtn?: boolean;
    /**
     * 重置按钮文本
     * @default '重置'
     */
    resetBtnText?: string;
    /**
     * 重置按钮属性
     */
    resetBtnProps?: Partial<ButtonProps>;
  };
  /**
   * form 属性
   */
  formProps?: PlusFormSelfProps & Partial<ElementPlusFormProps> & IntrinsicAttributes;
}
