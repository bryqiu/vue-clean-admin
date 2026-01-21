import { has, isEmpty } from 'lodash-es';
import {
  DEFAULT_LOCALE,
  dayLocaleMessageMap,
  elLocaleMessageMap,
  localeStorageKey,
  plusProComponentsLocaleMessageMap,
} from './index';
import dayjs from 'dayjs';
import type { I18n } from 'vue-i18n';
import type { Ref } from 'vue';

/**
 * 获取语言模块本地存储数据
 * @returns 反序列化后的语言Storage数据
 */
export const getLocaleStorage = () => {
  const localeStore = localStorage.getItem(localeStorageKey);
  return localeStore ? JSON.parse(localeStore) : {};
};

/**
 * 保存语言到本地存储
 * @param locale 语言区域
 */
export const setLocaleStorage = (locale: SupportedLocales) => {
  const localeStorage = getLocaleStorage();

  localStorage.setItem(
    localeStorageKey,
    JSON.stringify({
      ...localeStorage,
      currentLocale: locale,
    }),
  );
};

/**
 * 设置 HTML 标签 lang 属性
 * @param locale 语言区域
 */
export const setHtmlLang = (locale: SupportedLocales) => {
  if (!locale) return;
  document?.querySelector('html')?.setAttribute('lang', locale);
};

/**
 * 获取当前语言环境
 * @returns 当前语言环境标识
 */
export const getCurrentLocale = (): SupportedLocales => {
  // 首先从本地存储获取
  const localeStorage = getLocaleStorage();
  if (!isEmpty(localeStorage) && has(localeStorage, 'currentLocale')) {
    return localeStorage.currentLocale as SupportedLocales;
  }

  // 从html标签获取
  const lang = document.documentElement.lang as SupportedLocales;
  if (lang) {
    return lang;
  }

  // 从浏览器语言获取
  // const browserLang = navigator.language;
  // if (browserLang) {
  //   return browserLang;
  // }

  // 默认语言
  return DEFAULT_LOCALE;
};

/** 加载系统语言包 */
export const loadAppLocaleMessages = async (locale: SupportedLocales, i18nInstance: I18n) => {
  try {
    const appLocaleMessage = (await import(`./langs/${locale}.json`)).default as Record<
      string,
      string
    >;
    i18nInstance.global.setLocaleMessage(locale, appLocaleMessage || {});
  } catch (error) {
    console.error(`系统${locale}语言包加载失败`, error);
  }
};

/** 加载 dayjs 语言包 */
export const loadDayjsLocaleMessages = async (locale: SupportedLocales) => {
  try {
    const dayjsLocaleMessage = (await dayLocaleMessageMap[locale]).default;
    dayjs.locale(dayjsLocaleMessage);
  } catch (error) {
    console.error(`dayjs ${locale}语言包加载失败`, error);
  }
};

/** 加载 Element Plus 语言包 */
export const loadElementLocaleMessages = async (
  locale: SupportedLocales,
  elLocaleMessage: Ref<ElLanguage | undefined>,
) => {
  try {
    const elementPlusLocaleMessage = (await elLocaleMessageMap[locale]).default;
    elLocaleMessage.value = elementPlusLocaleMessage;
  } catch (error) {
    console.error(`Element Plus ${locale}语言包加载失败`, error);
  }
};

/** 加载 PlusProComponents 语言包 */
export const loadPlusProComponentsLocaleMessages = async (
  locale: SupportedLocales,
  plusLocaleMessage: Ref<PlusLanguage | undefined>,
) => {
  try {
    const plusProComponentsLocaleMessage = (await plusProComponentsLocaleMessageMap[locale])
      .default;
    plusLocaleMessage.value = plusProComponentsLocaleMessage;
  } catch (error) {
    console.error(`PlusProComponents ${locale}语言包加载失败`, error);
  }
};

/** 获取 Element Plus 默认语言包 */
export const getElementDefaultLocaleMessage = async () => {
  return (await elLocaleMessageMap[DEFAULT_LOCALE]).default;
};
