import { createGlobalState } from '@vueuse/core';
import { computed, ref } from 'vue';

export const useSettingState = createGlobalState(() => {
  const drawerVisible = ref(false);

  /** 获取抽屉状态 */
  const getDrawerVisible = computed(() => {
    return drawerVisible.value;
  });

  /** 打开抽屉 */
  const openSettingDrawer = () => {
    drawerVisible.value = true;
  };

  /** 关闭抽屉 */
  const closeSettingDrawer = () => {
    drawerVisible.value = false;
  };

  return {
    getDrawerVisible,
    openSettingDrawer,
    closeSettingDrawer,
  };
});
