/**
 * 获取 Bearer Token
 * @param token 令牌
 * @returns Bearer Token
 */
export const getBearerToken = (token: string) => {
  return `Bearer ${token}`;
};
