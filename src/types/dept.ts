import { CreateTime, ID, Status } from './common';

export interface Dept {
  /**
   * 部门ID
   */
  id: ID;

  /**
   * 部门名称
   */
  name: string;

  /**
   * 父级ID
   * 顶级部门为 0
   */
  parentId: number;

  /**
   * 排序
   */
  sort: number;

  /**
   * 状态 (0禁用 1启用)
   */
  status: Status;

  /**
   * 备注
   */
  remark?: string;

  /**
   * 创建时间 (时间戳)
   */
  createTime: CreateTime;

  /**
   * 子部门列表
   */
  children?: Dept[];
}
