import { storeModulesNames } from '@/store/config';
import { formatStoreKey } from '@/store/helpers';
import { useUserStore } from '@/store/modules/user';
import { PermissionCode } from '#/type';
import { storeToRefs } from 'pinia';
import { isEmpty } from '@/utils';

export const useAuth = () => {
  const userStore = useUserStore();
  const { getPermissionCodes } = storeToRefs(userStore);

  /**
   * 获取本地 Access Token
   */
  const getLocalAccessToken = () => {
    const data = JSON.parse(localStorage.getItem(formatStoreKey(storeModulesNames.user)) || '{}');
    return data?.accessToken || '';
  };

  /**
   * 获取本地 Refresh Token
   */
  const getLocalRefreshToken = () => {
    const data = JSON.parse(localStorage.getItem(formatStoreKey(storeModulesNames.user)) || '{}');
    return data?.refreshToken || '';
  };

  /**
   * 判断是否有权限
   * @param code 权限码，可以是单个权限码字符串，也可以是权限码数组
   * @returns 是否有权限
   */
  const hasPermission = (code: PermissionCode): boolean => {
    // 如果是特殊通配符，直接放行
    if (getPermissionCodes.value.includes('*:*:*')) return true;

    // 空字符串、空数组情况，默认为无权限
    if (isEmpty(code)) return false;

    const codes = Array.isArray(code) ? code : [code];

    // 只要满足其中一个权限码即可
    return codes.some((c) => getPermissionCodes.value.includes(c));
  };

  return {
    getLocalAccessToken,
    getLocalRefreshToken,
    hasPermission,
  };
};
