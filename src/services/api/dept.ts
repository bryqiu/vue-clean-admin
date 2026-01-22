import { request } from '../request';
import type { Dept } from '#/type';

/** 获取部门列表 */
export const getDeptList = (params: PaginationParams) => {
  return request.get<PaginationResult<Dept>>({
    url: `/dept/list?page=${params.page}&pageSize=${params.pageSize}`,
  });
};

// /** 新增部门 */
// export const addDept = (data: Partial<Dept>) => {
//   return request.post({
//     url: '/dept/add',
//     data,
//   });
// };

// /** 修改部门 */
// export const updateDept = (data: Partial<Dept>) => {
//   return request.put({
//     url: `/dept/update`,
//     data,
//   });
// };

/** 删除部门 */
export const deleteDept = (id: Dept['id']) => {
  return request.delete({
    url: `/dept/delete?id=${id}`,
  });
};
