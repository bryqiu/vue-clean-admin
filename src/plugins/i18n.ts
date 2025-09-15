import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
import {
  getCurrentLocale,
  loadAppLocaleMessages,
  loadDayjsLocaleMessages,
  loadElementLocaleMessages,
  setHtmlLang,
  setLocaleStorage,
} from '@/locale/helpers';
import { DEFAULT_LOCALE } from '@/locale';
import type { Language } from 'element-plus/es/locale';
import { ref } from 'vue';

// 创建i18n实例
const i18nInstance = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  globalInjection: true,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {},
  missingWarn: false,
  fallbackWarn: false,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
});

const elLocaleMessage = ref<Language>();

// 动态加载语言包
export async function loadLocaleMessages(locale: SupportedLocales) {
  // 加载系统语言包
  loadAppLocaleMessages(locale, i18nInstance);

  // 加载 dayjs 语言包
  loadDayjsLocaleMessages(locale);

  // 加载 Element Plus 语言包
  loadElementLocaleMessages(locale, elLocaleMessage);

  // 设置语言
  setI18nLanguage(locale);
}

/**
 * 设置 i18n 国际化语言
 * @param locale 目标语言
 */
function setI18nLanguage(locale: SupportedLocales) {
  // vue i18n 语言设置
  i18nInstance.global.locale.value = locale;
  // 写入本地存储
  setLocaleStorage(locale);
  // 设置 HTML 标签 lang 属性
  setHtmlLang(locale);
}

/**
 * 初始化i18n
 * @param app Vue应用实例
 */
export const initI18n = async (app: App<Element>) => {
  // 注册i18n插件
  app.use(i18nInstance);
  // 获取当前语言
  const locale = getCurrentLocale();
  // 加载语言包
  await loadLocaleMessages(locale);
};

export { i18nInstance, elLocaleMessage };
