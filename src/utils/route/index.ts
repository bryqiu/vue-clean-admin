import { SortModeEnum } from '@/enums/index';
import { generateUUID } from '../common/uuid';

/**
 * 处理通过 import.meta.glob 导出的路由
 * @param routers 路由列表
 * @returns 返回提取后的正确路由
 */
export const extractRoutes = (routers: Record<string, any>): CustomRouteRecordRaw[] => {
  return Object.values(routers).map((router) => router.default);
};

/**
 * 生成排序后的路由表
 * @param routes 路由表
 * @param mode 排序模式，升序(asc) | 降序(desc)
 */
export const generateSortRouter = (routes: CustomRouteRecordRaw[], mode: SortModeEnum) => {
  return routes.sort((a, b) => {
    const sortA = a.meta.sort ?? 0;
    const sortB = b.meta.sort ?? 0;
    return mode === SortModeEnum.ASC ? sortA - sortB : sortB - sortA;
  });
};

/**
 * 生成唯一Key
 * @param route 路由信息
 * @returns Key值
 */
const generateMenuKey = (route: CustomRouteRecordRaw) => {
  const path = route.path.replace(/\//g, '');
  const keyValue = `KEY-${path.toUpperCase()}-${generateUUID(15)}`;
  return keyValue;
};

/**
 * 给菜单添加唯一Key
 * @param routes 路由表
 * @returns 路由表
 */
export const addMenuKey = (routes: CustomRouteRecordRaw[]) => {
  return routes.map((route) => {
    const newRoute = { ...route };
    newRoute.meta = { ...newRoute.meta, menuKey: generateMenuKey(newRoute) };
    if (newRoute.children) {
      newRoute.children = addMenuKey(newRoute.children);
    }
    return newRoute;
  });
};

/**
 * 根据Key值递归路由表找到指定的路由数据
 * @param menuList 菜单表
 * @param targetKey 目标Key
 * @returns 目标Key所在的route信息
 */
export const findRouteBasedOnTheKey = (
  menuList: CustomRouteRecordRaw[],
  targetKey: string,
): NullType<CustomRouteRecordRaw> => {
  for (const route of menuList) {
    if (route.meta.menuKey === targetKey) return route;
    if (route.children && route.children.length > 0) {
      const childRoute = findRouteBasedOnTheKey(route.children, targetKey);
      if (childRoute) return childRoute;
    }
  }
  return null;
};

/**
 * 根据Key值查找其所有父菜单Key
 * @param menuList 菜单列表
 * @param targetKey 目标Key
 * @returns 返回由Key组成的数组
 */
export const findParentMenuKeys = (
  menuList: CustomRouteRecordRaw[],
  targetKey: string,
): string[] => {
  const findParentKeys = (
    items: CustomRouteRecordRaw[],
    target: string,
    parents: string[] = [],
  ): string[] | null => {
    for (const item of items) {
      const currentKey = item.meta.menuKey;
      if (currentKey === target) {
        return parents;
      }
      if (item.children?.length) {
        const result = findParentKeys(
          item.children,
          target,
          currentKey ? [...parents, currentKey] : parents,
        );
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  return findParentKeys(menuList, targetKey) || [];
};

export const findRootSubmenuKeys = (menuList: CustomRouteRecordRaw[]): string[] => {
  const rootSubmenuKeys: string[] = [];
  const traverseMenu = (menu: CustomRouteRecordRaw) => {
    if (menu.children && menu.children.length > 0) {
      if (menu.meta && menu.meta.menuKey) {
        rootSubmenuKeys.push(menu.meta.menuKey);
      }
      for (const child of menu.children) {
        traverseMenu(child); // 递归遍历子菜单
      }
    }
  };

  for (const menu of menuList) {
    traverseMenu(menu);
  }

  return rootSubmenuKeys;
};
