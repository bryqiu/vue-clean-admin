import { FormTypeEnum, GenderEnum, PermissionRouteTypeEnum, StatusEnum } from '@/enums';

/**
 * 创建时间
 */
export type CreateTime = number;

/**
 * 更新时间
 */
export type UpdateTime = Nullable<number>;

/**
 * 状态，0-正常，1-停用
 */
export type Status = GetObjectValues<typeof StatusEnum>;

/**
 * 性别，1-男，0-女
 */
export type Gender = GetObjectValues<typeof GenderEnum>;

/**
 * 路由类型
 */
export type RouteType = GetObjectValues<typeof PermissionRouteTypeEnum>;

/**
 * 表单类型
 */
export type FormType = GetObjectValues<typeof FormTypeEnum>;

/**
 * 全局通用 ID 类型
 * 如果后端返回 19 位雪花算法ID时，可改为 string（使用 number 会导致精度丢失）
 */
export type ID = number;

/**
 * 状态码类型
 */
export type PermissionCode<T = string | string[]> = T;
