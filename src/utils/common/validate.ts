import { REGEX } from '@/constants';

export type DataType =
  | 'String'
  | 'Number'
  | 'Boolean'
  | 'Array'
  | 'Object'
  | 'Function'
  | 'Date'
  | 'RegExp'
  | 'Null'
  | 'Undefined'
  | 'Symbol'
  | 'BigInt'
  | 'Map'
  | 'Set'
  | 'WeakMap'
  | 'WeakSet'
  | 'Promise'
  | 'Error'
  | 'Math'
  | 'JSON';

/**
 * 获取值的精确类型
 * @param value - 要检查的值
 * @returns 返回值的精确类型字符串
 */
export function getType(value: unknown): DataType {
  if (value === null) return 'Null';
  if (value === undefined) return 'Undefined';

  const typeString = Object.prototype.toString.call(value);
  const typeMatch = typeString.match(/\[object (\w+)\]/);

  return (typeMatch?.[1] as DataType) || 'Object';
}

/**
 * 检查值是否为指定类型
 * @param value - 要检查的值
 * @param expectedType - 期望的类型
 * @returns 如果值是指定类型，则返回 true，否则返回 false
 */
export function isType(value: unknown, expectedType: DataType): boolean {
  return getType(value) === expectedType;
}

/**
 * 检查是否为字符串
 * @param value - 要检查的值
 * @returns 如果值是字符串，则返回 true，否则返回 false
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * 检查是否为数字
 * @param value - 要检查的值
 * @returns 如果值是数字，则返回 true，否则返回 false
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value);
}

/**
 * 检查是否为布尔值
 * @param value - 要检查的值
 * @returns 如果值是布尔值，则返回 true，否则返回 false
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * 检查是否为数组
 * @param value - 要检查的值
 * @returns 如果值是数组，则返回 true，否则返回 false
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

/**
 * 检查是否为对象（排除null和数组）
 * @param value - 要检查的值
 * @returns 如果值是对象，则返回 true，否则返回 false
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * 检查是否为函数
 * @param value - 要检查的值
 * @returns 如果值是函数，则返回 true，否则返回 false
 */
export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === 'function';
}

/**
 * 检查是否为日期对象
 * @param value - 要检查的值
 * @returns 如果值是日期对象，则返回 true，否则返回 false
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

/**
 * 检查是否为正则表达式
 * @param value - 要检查的值
 * @returns 如果值是正则表达式，则返回 true，否则返回 false
 */
export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp;
}

/**
 * 检查是否为null
 * @param value - 要检查的值
 * @returns 如果值是null，则返回 true，否则返回 false
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * 检查是否为undefined
 * @param value - 要检查的值
 * @returns 如果值是undefined，则返回 true，否则返回 false
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

/**
 * 检查是否为null或undefined
 * @param value - 要检查的值
 * @returns 如果值是null或undefined，则返回 true，否则返回 false
 */
export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * 检查是否为Symbol
 * @param value - 要检查的值
 * @returns 如果值是Symbol，则返回 true，否则返回 false
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}

/**
 * 检查是否为BigInt
 * @param value - 要检查的值
 * @returns 如果值是BigInt，则返回 true，否则返回 false
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

/**
 * 检查是否为Map
 * @param value - 要检查的值
 * @returns 如果值是Map，则返回 true，否则返回 false
 */
export function isMap(value: unknown): value is Map<unknown, unknown> {
  return value instanceof Map;
}

/**
 * 检查是否为Set
 * @param value - 要检查的值
 * @returns 如果值是Set，则返回 true，否则返回 false
 */
export function isSet(value: unknown): value is Set<unknown> {
  return value instanceof Set;
}

/**
 * 检查是否为Promise
 * @param value - 要检查的值
 * @returns 如果值是Promise，则返回 true，否则返回 false
 */
export function isPromise(value: unknown): value is Promise<unknown> {
  return value instanceof Promise;
}

/**
 * 检查是否为Error对象
 * @param value - 要检查的值
 * @returns 如果值是Error对象，则返回 true，否则返回 false
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

/**
 * 检查是否为空值（null、undefined、空字符串、空数组、空对象）
 * @param value - 要检查的值
 * @returns 如果值是空值，则返回 true，否则返回 false
 */
export function isEmpty(value: unknown): boolean {
  if (isNullOrUndefined(value)) return true;
  if (isString(value)) return value.length === 0;
  if (isArray(value)) return value.length === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  if (isMap(value) || isSet(value)) return value.size === 0;
  return false;
}

/**
 * 判断是否符合邮箱格式
 * @param value 需要判断的值
 * @returns 如果符合邮箱格式，则返回 true，否则返回 false
 */
export const isEmail = (value: string) => {
  if (!isString(value)) return false;
  return REGEX.EMAIL_REG.test(value);
};

/**
 * 判断是否符合URL格式
 * @param value 需要判断的值
 * @returns 如果符合URL格式，则返回 true，否则返回 false
 */
export const isURL = (value: string) => {
  if (!isString(value)) return false;
  return REGEX.LINK_URL.test(value);
};
