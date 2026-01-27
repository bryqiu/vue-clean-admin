import type { AuthDirective, DirectiveConfig } from '../typing';
import type { PermissionCode } from '#/type';

/**
 * 移除元素
 * @param el 元素
 * @param value 权限码
 */
function removeElement(el: HTMLElement, value: PermissionCode) {
  const { hasPermission } = useAuth();
  !hasPermission(value) && el.remove();
}

export const authDirective: DirectiveConfig<AuthDirective> = {
  name: 'auth',
  description: 'v-auth，权限认证指令，用于细粒度的权限控制，比如按钮',
  directive: {
    mounted(el, binding) {
      const { value } = binding;
      removeElement(el, value);
    },
    updated(el, binding) {
      const { value } = binding;
      removeElement(el, value);
    },
  },
};
