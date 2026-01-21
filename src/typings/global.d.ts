import { PropType as propType } from 'vue';
import type { ClassValue } from 'clsx';
import { supportLocales } from '@/locale';
import type { Language, TranslatePair } from 'element-plus/es/locale';

declare global {
  /** 对齐模式 */
  type AlignMode = 'horizontal' | 'vertical';

  /** 方向 */
  type Direction = 'horizontal' | 'vertical';

  /** 面包屑样式类型 */
  type BreadcrumbStyleType = 'default' | 'arrow' | 'parallelogram';

  /** 颜色类型 */
  type ElColorType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

  /** 颜色权重 */
  type ColorWeight = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  /** 空类型 */
  type Nullable<T> = T | null;

  /** 属性类型 */
  type PropType<T> = propType<T>;

  /** clsx 类名 */
  type ClsxClassValues = ClassValue;

  /** 支持的区域语言 */
  type SupportedLocales = 'zh-CN' | 'en' | 'zh-HK';

  /** Element Plus 语言包类型 */
  type ElLanguage = Language;
  /** PlusProComponents 语言包类型 */
  type PlusLanguage = PlusLanguage & { el?: TranslatePair };

  /** 字典基本结构 */
  interface BaseOptions<T = string> {
    label: string;
    value: T;
  }

  type IconComponent = 'iconify' | 'local';

  /** 分页请求参数 */
  interface PaginationParams {
    /** 当前页码 */
    currentPage: number;
    /** 每页显示条数 */
    pageSize: number;
  }

  /** 分页响应数据结构 */
  interface PaginationResult<T = any> {
    /** 列表数据 */
    list: T[];
    /** 总条数 */
    total: number;
  }

  /** 基础对象类型 */
  type BaseObject = Record<string | number | symbol, any>;

  /** 获取对象的 key 类型 */
  type GetObjectKey<T extends BaseObject> = keyof T;

  /** 获取对象的 value 类型 */
  type GetObjectValues<T extends BaseObject> = T[GetObjectKey<T>];
}
