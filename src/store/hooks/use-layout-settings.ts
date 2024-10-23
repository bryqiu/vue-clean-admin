import { computed } from 'vue';
import { useSettingsStore } from '../index';

export const useLayoutSettings = () => {
  const settingsStore = useSettingsStore();
  const layoutSettings = settingsStore.getLayoutSettings;

  /* ======================== 布局设置的独立 computed  ======================== */
  /** 菜单折叠 */
  const isMenuCollapse = computed(() => {
    return layoutSettings.isMenuCollapse;
  });

  /** 手风琴模式 */
  const isMenuAccordion = computed(() => {
    return layoutSettings.isMenuAccordion;
  });

  /* ======================== 具体业务相关的方法  ======================== */

  return { isMenuCollapse, isMenuAccordion };
};
