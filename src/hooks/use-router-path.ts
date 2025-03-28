import {
  LocationQueryRaw,
  RouteLocationNamedRaw,
  RouteParamsRaw,
  useRoute,
  useRouter,
} from 'vue-router';
import { ROOT_REDIRECT } from '@/router/config';

export const useRouterPath = () => {
  const currentRouter = useRouter();
  const currentRoute = useRoute();

  /** 返回根路径 */
  const goBackRootPath = () => {
    return currentRouter.push(ROOT_REDIRECT);
  };

  /**
   * 跳转路由
   * @param path 跳转路径
   * @param query 跳转参数
   */

  return {
    currentRouter,
    currentRoute,
    goBackRootPath,
  };
};
