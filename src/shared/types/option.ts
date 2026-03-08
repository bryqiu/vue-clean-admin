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
