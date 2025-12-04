import { formatStoreKey } from '@/store/helpers';
import { storeModulesNames } from '@/store/config';
import type { Language } from 'element-plus/es/locales';

/** 默认语言 */
export const DEFAULT_LOCALE: SupportedLocales = 'zh-CN';

/** 语言模块本地存储 Key */
export const localeStorageKey = formatStoreKey(storeModulesNames.locale);

/** 支持的语言选项 */
export const supportLocaleOptions: (BaseOptions<SupportedLocales> & { icon: string })[] = [
  {
    label: '简体中文',
    value: 'zh-CN',
    icon: 'circle-flags:cn',
  },
  {
    label: 'English',
    value: 'en',
    icon: 'circle-flags:us',
  },
];

/** dayjs 语言包映射类型 */
export type DayjsLocaleMap = {
  [key in SupportedLocales]: Promise<{ default: typeof import('dayjs/locale/*') }>;
};

/** dayjs 语言包映射 */
export const dayLocaleMessageMap: DayjsLocaleMap = {
  'zh-CN': import('dayjs/locale/zh-cn'),
  en: import('dayjs/locale/en'),
  'zh-HK': import('dayjs/locale/zh-hk'),
};

type ElLocaleMap = {
  [key in SupportedLocales]: Promise<{ default: Language }>;
};

/** Element Plus 语言包映射 */
export const elLocaleMessageMap: ElLocaleMap = {
  'zh-CN': import('element-plus/es/locale/lang/zh-cn'),
  en: import('element-plus/es/locale/lang/en'),
  'zh-HK': import('element-plus/es/locale/lang/zh-hk'),
};

/**
 * 获取 Element Plus 默认语言包（异步）
 * @returns Promise<Language>
 */
export async function getElementDefaultLocale(): Promise<Language> {
  const module = await elLocaleMessageMap[DEFAULT_LOCALE];
  return module.default;
}
