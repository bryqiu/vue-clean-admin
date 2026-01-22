import { request } from '../request';
import type { LoginParams, LoginResult, Role, User, UserInfo } from '#/type';

/** 登录 */
export const login = (data: LoginParams) => {
  return request.post<LoginResult>({
    url: '/auth/login',
    data,
  });
};

/** 获取用户信息 */
export const getUserInfo = () => {
  return request.get<User>({
    url: '/auth/user-info',
  });
};

/** 获取用户列表 */
export const getUserList = (params: PaginationParams) => {
  return request.get<PaginationResult<UserInfo>>({
    url: `/user/list?page=${params.page}&pageSize=${params.pageSize}`,
    params,
  });
};

// /** 新增用户 */
// export const addUser = (data: Partial<UserInfo>) => {
//   return request.post({
//     url: '/user/add',
//     data,
//   });
// };

// /** 更新用户 */
// export const updateUser = (data: Partial<UserInfo>) => {
//   return request.put({
//     url: '/user/update',
//     data,
//   });
// };

/** 删除用户 */
export const deleteUser = (id: number | string) => {
  return request.delete({
    url: `/user/delete?id=${id}`,
  });
};

/** 获取用户角色信息 */
export const getUserRoleInfo = (userId: UserInfo['id']) => {
  return request.get<Role[]>({
    url: `/user/role-info?id=${userId}`,
  });
};

/** 分配角色 */
export const assignRole = (data: { userId: UserInfo['id']; roleIds: Array<Role['id']> }) => {
  return request.post({
    url: '/user/assign-role',
    data,
  });
};
