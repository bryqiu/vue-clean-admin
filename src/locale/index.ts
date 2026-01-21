import { formatStoreKey } from '@/store/helpers';
import { storeModulesNames } from '@/store/config';

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
  [key in SupportedLocales]: Promise<{ default: ElLanguage }>;
};

/** Element Plus 语言包映射 */
export const elLocaleMessageMap: ElLocaleMap = {
  'zh-CN': import('element-plus/es/locale/lang/zh-cn'),
  en: import('element-plus/es/locale/lang/en'),
  'zh-HK': import('element-plus/es/locale/lang/zh-hk'),
};

type PlusProComponentsLocaleMap = {
  [key in SupportedLocales]: Promise<{
    default: PlusLanguage;
  }>;
};

/** PlusProComponents 语言包映射 */
export const plusProComponentsLocaleMessageMap: PlusProComponentsLocaleMap = {
  'zh-CN': import('plus-pro-components/es/locale/lang/zh-cn'),
  en: import('plus-pro-components/es/locale/lang/en'),
  'zh-HK': import('plus-pro-components/es/locale/lang/zh-tw'),
};

/**
 * 获取 Element Plus 默认语言包（异步）
 * @returns Promise<Language>
 */
export async function getElementDefaultLocale(): Promise<ElLanguage> {
  const module = await elLocaleMessageMap[DEFAULT_LOCALE];
  return module.default;
}
