/** 响应数据结构 */
export interface ResponseResult<T = any> {
  /** 状态码 */
  code: number;
  /** 数据 */
  data: T;
  /** 消息 */
  msg: string;
}
