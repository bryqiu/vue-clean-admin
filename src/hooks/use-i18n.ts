import { i18nInstance } from '@/plugins/i18n';
import { computed } from 'vue';

export const useI18n = () => {
  const { global } = i18nInstance;

  /** 获取当前语言 */
  const getCurrentLocale = computed(() => global.locale.value as SupportedLocales);

  return {
    t: global.t,
    d: global.d,
    n: global.n,
    tm: global.tm,

    getCurrentLocale,
  };
};
