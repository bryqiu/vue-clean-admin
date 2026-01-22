import type { Gender, ID, Status } from './common';

export interface LoginParams {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
}

export interface LoginResult {
  /** 访问令牌 */
  accessToken: string;
  /** 刷新令牌 */
  refreshToken: string;
  /** 过期时间（毫秒） */
  expiresTime?: number;
}

export interface UserInfo {
  /**
   * 用户ID
   */
  id?: Nullable<ID>;
  /**
   * 昵称
   */
  nickname: string;
  /**
   * 账号
   */
  account: Nullable<number>;
  /**
   * 头像
   */
  avatar?: Nullable<string>;
  /**
   * 手机号
   */
  phone: string;
  /**
   * 邮箱
   */
  email?: Nullable<string>;
  /**
   * 性别
   */
  gender: Gender;
  /**
   * 备注
   */
  remark?: Nullable<string>;
  /**
   * 部门ID
   */
  deptId: Nullable<ID>;
  /**
   * 角色列表
   */
  roles: BaseOptions<ID>[];
}

export interface User {
  /**
   * 基本信息
   */
  basicInfo: UserInfo;
  /**
   * 权限码
   */
  permissionCodes: string[];
  /**
   * 权限路由
   */
  permissionRoutes: PermissionRoute[];
}
