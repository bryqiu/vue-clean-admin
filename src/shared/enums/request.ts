import type { ValueOf } from '#/common';

/** HTTP 请求方法枚举 */
export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

/** HTTP 请求方法联合类型 */
export type HttpMethod = ValueOf<typeof HTTP_METHOD>;

/** 请求体 Content-Type 枚举 */
export const CONTENT_TYPE = {
  JSON: 'application/json',
  FORM_URLENCODED: 'application/x-www-form-urlencoded',
  FORM_DATA: 'multipart/form-data',
  TEXT: 'text/plain',
  XML: 'application/xml',
  OCTET_STREAM: 'application/octet-stream',
} as const;

/** Content-Type 联合类型 */
export type ContentType = ValueOf<typeof CONTENT_TYPE>;

/** HTTP 状态码枚举 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  PARTIAL_CONTENT: 206,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  NOT_MODIFIED: 304,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const;

/** HTTP 状态码联合类型 */
export type HttpStatus = ValueOf<typeof HTTP_STATUS>;
