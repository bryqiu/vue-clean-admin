interface BaseUserInfo {
  /** 用户名 */
  userName: string;
  /** 昵称 */
  nickName?: string;
  /** 头像 */
  avatar: string;
  /** 备注 */
  remark: string;
}
interface userStore {
  userInfo: BaseUserInfo;
}

export type { userStore, BaseUserInfo };
