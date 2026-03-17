/**
 * 创建时间
 */
export type CreateTime = number;

/**
 * 更新时间
 */
export type UpdateTime = Nullable<number>;

/**
 * 全局通用 ID 类型
 * 如果后端返回 19 位雪花算法ID时，可改为 string（使用 number 会导致精度丢失）
 */
export type ID = number;

/**
 * 状态码类型
 */
export type PermissionCode<T = string | string[]> = T;

/** 响应数据结构 */
export interface ResponseResult<T = any> {
  /** 状态码 */
  code: number;
  /** 数据 */
  data: T;
  /** 消息 */
  msg: string;
}

/** 选项 label 的可用键类型。 */
export type OptionKey = string | number | symbol;

/**
 * 单个选项结构
 */
export type Option<
  T = unknown,
  M extends Record<OptionKey, unknown> = {},
  K extends OptionKey = string,
> = Readonly<{
  label: K;
  value: T;
}> &
  M;

/** 选项列表 */
export type Options<
  T = unknown,
  M extends Record<OptionKey, unknown> = {},
  K extends OptionKey = string,
> = Array<Option<T, M, K>>;

/** 分组选项结构 */
export type OptionGroup<
  T = unknown,
  M extends Record<OptionKey, unknown> = {},
  K extends OptionKey = string,
> = Readonly<{
  label?: string;
  options: Options<T, M, K>;
}>;

/** 提取对象值的联合类型 */
export type ValueOf<T extends object> = T[keyof T];
