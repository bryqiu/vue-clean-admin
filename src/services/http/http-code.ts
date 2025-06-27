export const HTTP_STATUS_CODE = {
  // 成功
  SUCCESS: 200,
  // 未授权
  UNAUTHORIZED: 401,
  // 禁止访问
  FORBIDDEN: 403,
  // 资源不存在
  NOT_FOUND: 404,
  // 服务器错误
  SERVER_ERROR: 500,
  // 网关错误
  BAD_GATEWAY: 502,
  // 服务不可用
  SERVICE_UNAVAILABLE: 503,
  // 网关超时
  GATEWAY_TIMEOUT: 504,
} as const;
