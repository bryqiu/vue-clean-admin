import { addMenuKey, extractRoutes, generateSortRouter } from '@/utils/index';
import { SortModeEnum } from '@/enums/index';

/** 基础路由 */
const basicRoutes: Record<string, any> = import.meta.glob(['./modules/basic/**/*.ts'], {
  eager: true,
});

/** 动态路由 */
const dynamicRoutes: Record<string, any> = import.meta.glob(['./modules/dynamic/**/*.ts'], {
  eager: true,
});

const globalRoutes: Record<string, any> = import.meta.glob(['./modules/global/**/*.ts'], {
  eager: true,
});

// 菜单路由表
export const menuRoutes = addMenuKey(
  generateSortRouter(
    [...extractRoutes(basicRoutes), ...extractRoutes(dynamicRoutes)],
    SortModeEnum.ASC,
  ),
);

console.log(menuRoutes);

/** 整体路由表 */
export const routes = [...extractRoutes(globalRoutes), ...menuRoutes];
