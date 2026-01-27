import type { Directive } from 'vue';
import type { PermissionCode } from '#/type';

export interface DirectiveConfig<T> {
  /** 指令名称 */
  name: string;
  /** 指令实现 */
  directive: T;
  /** 指令描述 */
  description?: string;
}

export type AuthDirective = Directive<HTMLElement, PermissionCode>;
