import type { ID, Status } from './common';

export type MenuOption = Pick<PermissionRoute, 'id' | 'parentId' | 'type' | 'children' | 'meta'>;

export interface Role {
  /**
   * 角色ID
   */
  id?: ID;
  /**
   * 角色名称
   */
  name: string;
  /**
   * 状态
   */
  status: Status;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 排序
   */
  sort: number;
  /**
   * 备注
   */
  remark: string;
}

export interface MenuFormData {
  /**
   * 菜单ID
   */
  id: PermissionRoute['id'];
  /**
   * 权限码
   */
  permissionCode?: PermissionRoute['permissionCode'];
  /**
   * 组件
   */
  component?: PermissionRoute['component'];
  /**
   * 路由元信息
   */
  meta: PermissionRoute['meta'];
  /**
   * 路由名称
   */
  name: PermissionRoute['name'];
  /**
   * 路由父ID，路由父级ID，如果是顶级路由，为0
   */
  parentId?: Nullable<PermissionRoute['parentId']>;
  /**
   * 路由地址
   */
  path: PermissionRoute['path'];
  /**
   * 重定向路径
   */
  redirect?: string;
  /**
   * 路由类型
   */
  type: PermissionRoute['type'];
}
