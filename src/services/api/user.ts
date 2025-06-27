import { request } from '../request';

interface UserInfoParams {
  username: string;
  password: string;
}

interface UserInfo {
  id: string;
  userName: string;
  role: string;
}

interface UserInfoResult {
  accessToken: string;
  refreshToken: string;
  userInfo: UserInfo;
}

/** 获取用户信息 */
export const accountLogin = (data: UserInfoParams) => {
  return request.post<UserInfoResult>({
    url: `auth/account/login`,
    data,
  });
};
