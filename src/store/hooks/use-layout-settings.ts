import { computed, unref } from 'vue';
import { useSettingsStore } from '../index';

export const useLayoutSettings = () => {
  const { getLayoutSettings, toggleMenuCollapse, toggleMenuAccordion } = useSettingsStore();

  /** 菜单折叠 */
  const isMenuCollapse = computed({
    get: () => unref(getLayoutSettings).isMenuCollapse,
    set: (val) => toggleMenuCollapse(val),
  });

  /** 手风琴模式 */
  const isMenuAccordion = computed({
    get: () => unref(getLayoutSettings).isMenuAccordion,
    set: (val) => toggleMenuAccordion(val),
  });

  return { isMenuCollapse, isMenuAccordion };
};
