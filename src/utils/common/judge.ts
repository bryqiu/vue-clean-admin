import { REGEX } from '@/constants';

type DataType =
  | 'Number'
  | 'String'
  | 'Boolean'
  | 'Object'
  | 'Function'
  | 'Null'
  | 'Undefined'
  | 'Symbol'
  | 'BigInt'
  | 'Array'
  | 'Date'
  | 'RegExp';

/**
 * 通用且精确的类型判断
 * @param value 需要判断的值
 * @param expectedType 预期的类型
 * @returns 如果值符合预期类型则返回 true，否则返回 false
 */
const isType = (value: unknown, expectedType: DataType) => {
  const GET_TYPE = Object.prototype.toString;

  const typeTag = `[object ${expectedType}]`;

  return GET_TYPE.call(value) === typeTag;
};

/**
 * 判断是否为数组
 * @param value 需要判断的值
 * @returns 如果 value 是 Array，则返回 true，否则返回 false
 */
export const isArray = (value: unknown) => {
  return Array.isArray(value);
};

/**
 * 判断是否为对象
 * @param value 需要判断的值
 * @returns 如果 value 是 Object，则返回 true，否则返回 false
 */
export const isObject = (value: unknown): value is object => {
  return isType(value, 'Object');
};

/**
 * 判断是否为布尔值
 * @param value 需要判断的值
 * @returns 如果 value 是 Boolean，则返回 true，否则返回 false
 */
export const isBoolean = (value: unknown): value is boolean => {
  return isType(value, 'Boolean');
};

/**
 * 判断是否为数字
 * @param value 需要判断的值
 * @returns 如果 value 是 Number，则返回 true，否则返回 false
 */
export const isNumber = (value: unknown): value is number => {
  return isType(value, 'Number');
};

/**
 * 判断是否为字符串
 * @param value 需要判断的值
 * @returns 如果 value 是 String，则返回 true，否则返回 false
 */
export const isString = (value: unknown): value is string => {
  return isType(value, 'String');
};

/**
 * 判断是否为 null
 * @param value 需要判断的值
 * @returns 如果 value 是 Null，则返回 true，否则返回 false
 */
export const isNull = (value: unknown) => {
  return isType(value, 'Null');
};

/**
 * 判断是否为 undefined
 * @param value 需要判断的值
 * @returns 如果 value 是 Undefined，则返回 true，否则返回 false
 */
export const isUndefined = (value: unknown) => {
  return isType(value, 'Undefined');
};

/**
 * 判断是否为函数
 * @param value 需要判断的值
 * @returns 如果 value 是 Function，则返回 true，否则返回 false
 */
export const isFunction = (value: unknown) => {
  return isType(value, 'Function');
};

/**
 * 判断是否为Date
 * @param value 需要判断的值
 * @returns 如果 value 是 Date，则返回 true，否则返回 false
 */
export const isDate = (value: unknown): value is Date => {
  return isType(value, 'Date');
};

/**
 * 判断是否为Symbol
 * @param value 需要判断的值
 * @returns 如果 value 是 Symbol，则返回 true，否则返回 false
 */
export const isSymbol = (value: unknown): value is symbol => {
  return isType(value, 'Symbol');
};

/**
 * 判断是否为空数据
 * @param value 需要判断的值
 *  @returns 如果 value 为空数据，则返回 true，否则返回 false
 */
export const isEmpty = (value: any) => {
  if (isNull(value) || isUndefined(value)) {
    return true;
  }
  if (isArray(value) || isString(value)) {
    return value.length === 0;
  }
  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }
  return false;
};

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
