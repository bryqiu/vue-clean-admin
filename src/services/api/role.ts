import { request } from '../request';
import type { Role } from '#/type';

/** 获取角色列表 */
export const getRoleList = (params: PaginationParams) => {
  return request.get<PaginationResult<Role>>({
    url: `/role/list?page=${params.page}&pageSize=${params.pageSize}`,
  });
};

// /** 新增角色 */
// export const addRole = (data: Partial<Role>) => {
//   return request.post({
//     url: '/role/add',
//     data,
//   });
// };

// /** 修改角色 */
// export const updateRole = (data: Partial<Role>) => {
//   return request.put({
//     url: `/role/update?`,
//     data,
//   });
// };

/** 删除角色 */
export const deleteRole = (id: number | string) => {
  return request.delete({
    url: `/role/delete?id=${id}`,
  });
};

/** 获取角色所拥有的菜单权限 */
export const getRolePermissions = (roleId: Role['id']) => {
  return request.get<number[]>({
    url: `/role/permissions?id=${roleId}`,
  });
};

/** 分配角色权限 */
export const assignPermission = (data: {
  roleId: Role['id'];
  permissionIds: Array<PermissionRoute['id']>;
}) => {
  return request.post({
    url: '/role/assign-permission',
    data,
  });
};

/** 获取角色下拉列表 */
export const getRoleOptions = () => {
  return request.get<BaseOptions<Role['id']>[]>({
    url: '/role/simple-list',
  });
};
