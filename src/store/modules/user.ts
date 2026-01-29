import { computed, ref } from 'vue';
import { store } from '@/store';
import { defineStore } from 'pinia';
import { storeModulesNames } from '@/store/config';
import { enableStoreHMR, formatStoreKey } from '@/store/helpers';
import type { User, UserInfo } from '#/type';
import { generateRoutes, getVisibleMenuRoutes } from '@/router/helpers';
import { generateSortRoutes } from '@/router/helpers';
import { staticRoutes } from '@/router';
import exceptionRoutes from '@/router/modules/system-routes/exception';
import { NOT_FOUND_ROUTE } from '@/router/config';

const createDefaultUserInfo = (): User => ({
  basicInfo: {
    avatar: '',
    email: '',
    gender: 0,
    phone: '',
    remark: '',
    id: null,
    nickname: '',
    account: null,
    deptId: null,
    roles: [],
  },
  permissionCodes: [],
  permissionRoutes: [],
});

const createUserStore = defineStore(
  storeModulesNames.user,
  () => {
    /** 访问令牌 */
    const accessToken = ref<string>('');
    /** 刷新令牌 */
    const refreshToken = ref<string>('');

    /** 获取刷新令牌 */
    const getRefreshToken = computed(() => {
      return refreshToken.value;
    });

    /** 获取访问令牌 */
    const getAccessToken = computed(() => {
      return accessToken.value;
    });

    /**
     * 设置访问令牌
     * @param token 访问令牌
     */
    const setAccessToken = (token: string) => {
      accessToken.value = token || '';
    };

    /**
     * 设置刷新令牌
     * @param token 刷新令牌
     */
    const setRefreshToken = (token: string) => {
      refreshToken.value = token || '';
    };

    /** 是否已添加路由 */
    const isRoutesAdded = ref(false);

    /** 获取路由添加状态 */
    const getRoutesAddStatus = computed(() => {
      return isRoutesAdded.value;
    });

    /**
     * 设置路由添加状态
     * @param value 路由是否添加状态
     */
    const setRoutesAddStatus = (value: boolean) => {
      isRoutesAdded.value = value;
    };

    /** 用户信息 */
    const userInfo = ref<User>(createDefaultUserInfo());

    /**
     * 写入用户信息
     * @param data 用户信息
     */
    const setUserInfo = (data: User) => {
      userInfo.value = data || createDefaultUserInfo();
    };

    /** 获取用户基本信息 */
    const getUserBasicInfo = computed(() => {
      return userInfo.value.basicInfo || {};
    });

    /**
     * 设置用户基本信息
     * @param data 用户信息
     */
    const setUserBasicInfo = (data: UserInfo) => {
      userInfo.value.basicInfo = data || {};
    };

    /** 获取权限路由 */
    const getPermissionRoutes = computed(() => {
      return userInfo.value.permissionRoutes || [];
    });

    /**
     * 设置权限路由
     * @param routes 权限路由列表
     */
    const setPermissionRoutes = (routes: PermissionRoute[]) => {
      userInfo.value.permissionRoutes = routes || [];
    };

    /**
     * 需要进行动态注册的路由
     */
    const registerRoutes = computed(() => {
      return generateRoutes(getPermissionRoutes.value).concat([NOT_FOUND_ROUTE]);
    });

    /**
     * 获取菜单路由，用于在菜单栏 Menu 渲染
     */
    const getMenuRoutes = computed(() => {
      /**
       * tip: 加入 exceptionRoutes 只是为了便于在菜单栏展示，不用可删除
       */
      const menuRoutes = getVisibleMenuRoutes([
        ...staticRoutes,
        ...registerRoutes.value,
        exceptionRoutes,
      ]);
      return generateSortRoutes(menuRoutes);
    });

    /** 获取权限码 */
    const getPermissionCodes = computed(() => {
      return userInfo.value.permissionCodes || [];
    });

    /**
     * 设置权限码
     * @param codes 权限码列表
     */
    const setPermissionCodes = (codes: string[]) => {
      userInfo.value.permissionCodes = codes || [];
    };

    /** 注销/退出登录 */
    const logout = () => {
      // 访问令牌置空
      setAccessToken('');
      // 刷新令牌置空
      setRefreshToken('');
      // 重置用户信息与权限
      setUserInfo(createDefaultUserInfo());
      // 清除持久化缓存
      localStorage.removeItem(formatStoreKey(storeModulesNames.user));
      // 重置路由添加状态
      setRoutesAddStatus(false);
    };

    return {
      accessToken,
      refreshToken,
      userInfo,
      registerRoutes,
      getMenuRoutes,
      getAccessToken,
      getRefreshToken,
      isRoutesAdded,
      getRoutesAddStatus,
      getUserBasicInfo,
      getPermissionRoutes,
      setUserInfo,
      logout,
      setRoutesAddStatus,
      setAccessToken,
      setRefreshToken,
      setUserBasicInfo,
      getPermissionCodes,
      setPermissionCodes,
    };
  },
  {
    persist: {
      omit: ['isRoutesAdded'],
    },
  },
);

enableStoreHMR(createUserStore);

/**
 * 注入 Pinia 实例，使其能在组件外使用
 * @see：https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
 */
export const useUserStore = () => {
  return createUserStore(store);
};
