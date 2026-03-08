/** 提取对象值的联合类型 */
export type ValueOf<T extends object> = T[keyof T];
