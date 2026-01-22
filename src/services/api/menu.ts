import { request } from '../request';
import type { MenuFormData, MenuOption } from '#/type';

/** 获取菜单列表 */
export const getMenuList = (params: PaginationParams) => {
  return request.get<PaginationResult<PermissionRoute>>({
    url: `/menu/list?page=${params.page}&pageSize=${params.pageSize}`,
  });
};

/** 获取菜单下拉选项 */
export const getMenuOptions = () => {
  return request.get<PaginationResult<MenuOption>>({
    url: '/menu/simple-list',
  });
};

/** 新增菜单 */
export const addMenu = (data: MenuFormData) => {
  return request.post({
    url: '/menu/add',
    data,
  });
};

/** 更新菜单 */
export const updateMenu = (data: Omit<MenuFormData, 'id'> & { id: number }) => {
  return request.post({
    url: '/menu/update',
    data,
  });
};

/** 获取菜单信息 */
export const getMenuInfo = (id: PermissionRoute['id']) => {
  return request.get<MenuFormData>({
    url: `/menu/detail?id=${id}`,
  });
};
