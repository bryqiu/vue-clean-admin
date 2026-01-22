import type { ImportGlobRoutes } from './typing';
import { SortModeEnum } from '@/enums/index';
import { LAYOUT_COMPONENT, NOT_COMPONENT, PARENT_LAYOUT, VIEWS_MODULES } from './config';
import { isString } from '@/utils';
import { PermissionRouteTypeEnum } from '@/enums';

/**
 * 处理通过 import.meta.glob 导出的路由
 * @param routers 路由列表
 * @returns 返回提取后的路由表
 */
export const extractRoutes = (routers: Record<string, ImportGlobRoutes>) => {
  return Object.values(routers).map((router) => router.default);
};

/**
 * 递归排序路由表（包括子路由）
 * @param routes 路由表
 * @param mode 排序模式，升序(asc) | 降序(desc)
 */
export const generateSortRoutes = (
  routes: CustomRouteRecordRaw[],
  mode: SortModeEnum = SortModeEnum.ASC,
): CustomRouteRecordRaw[] => {
  console.log(routes, 'routes');

  return routes.sort((a, b) => {
    const sortA = a.meta.sort ?? 0;
    const sortB = b.meta.sort ?? 0;
    return mode === SortModeEnum.ASC ? sortA - sortB : sortB - sortA;
  });
};

// 获取可见的菜单路由
export const getVisibleMenuRoutes = (menus: CustomRouteRecordRaw[]): CustomRouteRecordRaw[] => {
  return menus
    .filter((item) => !item.meta?.hideMenu)
    .map((item) => {
      const menuNode = { ...item };
      if (menuNode.children && menuNode.children.length) {
        menuNode.children = getVisibleMenuRoutes(menuNode.children);
      }
      return menuNode;
    });
};

/**
 * 加载路由组件
 * @param route 路由信息
 * @returns 组件实例
 */
function loadComponent(route: PermissionRoute) {
  const { component: componentPath, parentId, type } = route;

  // 如果 componentPath 不是字符串，返回默认兜底组件
  if (!isString(componentPath)) return NOT_COMPONENT;

  // route.parentId 为 0，并且 type 类型为目录，才返回 Layout 组件
  if (type === PermissionRouteTypeEnum.DIR) {
    // 顶级目录（parentId = 0），返回 Layout 组件
    if (!parentId) return LAYOUT_COMPONENT;
    // 子级目录，返回 ParentLayout 组件
    return PARENT_LAYOUT;
  }

  const key = `../views/${componentPath}.vue`;

  const nameKey = `../views/${componentPath}/${componentPath}.vue`;

  const indexKey = `../views/${componentPath}/index.vue`;

  const currentComponent = VIEWS_MODULES[key] || VIEWS_MODULES[nameKey] || VIEWS_MODULES[indexKey];

  return currentComponent || NOT_COMPONENT;
}

/**
 * 重定向处理
 * @param route 路由信息
 * @returns 重定向路径
 */
function getRedirectPath(route: PermissionRoute): CustomRouteRecordRaw['redirect'] {
  const { children } = route;

  // 如果没有子路由，返回 undefined
  if (!children || !children.length) {
    return undefined;
  }

  // 找到第一个非隐藏菜单的子路由，或返回第一个子路由
  const target = children.find((child) => !child.meta?.hideMenu) || children[0];
  return target.path;
}

/**
 * 生成符合 Vue Router 定义的路由表
 * @param routes 未转化的路由数据
 * @returns 符合结构的路由表
 */
export function generateRoutes(routes: PermissionRoute[]): CustomRouteRecordRaw[] {
  if (!routes.length) return [];
  return routes.map((route) => {
    const { path, name, redirect, type, meta } = route;
    const baseRoute: Omit<CustomRouteRecordRaw, 'children'> = {
      path,
      name,
      redirect,
      type,
      component: loadComponent(route),
      meta: {
        ...meta,
        // 是否在侧边栏菜单中隐藏
        hideMenu: route.meta?.hideMenu || false,
        // 是否在面包屑中隐藏
        hideBreadcrumb: route.meta?.hideBreadcrumb || false,
        // 当只有一个子菜单时，是否隐藏父级菜单直接显示子菜单内容
        hideParentIfSingleChild: route.meta?.hideParentIfSingleChild || false,
      },
    };

    // 是目录数据，设置重定向路径
    if (type === PermissionRouteTypeEnum.DIR) {
      baseRoute.redirect = redirect || getRedirectPath(route);
    }
    // 递归处理子路由
    const processedChildren =
      route.children && route.children.length ? generateRoutes(route.children) : undefined;

    return {
      ...baseRoute,
      ...(processedChildren ? { children: processedChildren } : {}),
    };
  });
}
