import { ROUTE_NAMES } from '../config';
import type { RouteRecordNameGeneric, RouteRecordRaw, Router } from 'vue-router';
import { userService } from '@/services/api';
import { nprogress } from './helpers';
import { storeToRefs } from 'pinia';

/** 登录认证页面：账号登录页、短信登录页、二维码登录页、忘记密码页、注册页... */
const authPages: RouteRecordNameGeneric[] = [
  ROUTE_NAMES.AUTH,
  ROUTE_NAMES.ACCOUNT_LOGIN,
  ROUTE_NAMES.SMS_LOGIN,
  ROUTE_NAMES.QR_LOGIN,
  ROUTE_NAMES.FORGOT_PASSWORD,
  ROUTE_NAMES.REGISTER,
];

/** 页面白名单：不需要登录也能访问的页面 */
const pageWhiteList: RouteRecordNameGeneric[] = [...authPages];

export function beforeEachGuard(router: Router) {
  router.beforeEach(async (to) => {
    /** 进度条：开始 */
    nprogress.start();

    const { name: RouteName } = to;

    const userStore = useUserStore();
    const { getAccessToken, getRoutesAddStatus, registerRoutes } = storeToRefs(userStore);
    const { setRoutesAddStatus, setUserInfo, logout } = userStore;

    const { getLocalAccessToken } = useAuth();

    /** 访问令牌 */
    const accessToken = getAccessToken.value || getLocalAccessToken();

    // 1.用户未登录（无 Token）
    if (!accessToken) {
      const isWhitePage = pageWhiteList.includes(RouteName);
      // 1.1 未登录，如果访问的是白名单中的页面，直接放行
      if (isWhitePage) return true;

      nprogress.done();

      // 1.2 未登录又不在白名单，则拦截并重定向到登录页
      return { name: ROUTE_NAMES.ACCOUNT_LOGIN };
    }

    // 如果已登录用户试图访问登录页，避免重复登录，要强制重定向到首页
    if (authPages.includes(RouteName)) {
      nprogress.done();
      return { name: ROUTE_NAMES.ROOT };
    }

    // 判断是否需要动态加载路由的操作
    if (!getRoutesAddStatus.value) {
      // isRoutesAdded 默认为 false（未持久化），在已经动态注册过时会设置为true，在页面刷新时会重置为 false
      try {
        // 1.拉取用户信息
        const userInfo = await userService.getUserInfo();

        // 2.将用户信息存入 Store
        setUserInfo(userInfo);

        console.log(registerRoutes.value, 'registerRoutes');

        // 3.动态注册路由，registerRoutes 是处理后的路由表
        registerRoutes.value.forEach((route) => {
          router.addRoute(route as unknown as RouteRecordRaw);
        });

        // 4.标记路由已添加
        setRoutesAddStatus(true);

        // 5.中断当前导航，重新进入守卫
        return { ...to, replace: true };
      } catch (error) {
        // 获取用户信息失败（如 Token 过期失效、网络异常）
        logout();
        nprogress.done();
        // 重定向回登录页，让用户重新登录
        return { name: ROUTE_NAMES.ACCOUNT_LOGIN };
      }
    }

    return true;
  });
}
