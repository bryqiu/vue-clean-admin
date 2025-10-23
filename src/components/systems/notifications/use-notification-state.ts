import { computed, ref } from 'vue';
import { createGlobalState } from '@vueuse/core';

export const useNotificationState = createGlobalState(() => {
  const drawerVisible = ref(false);

  /** 获取抽屉状态 */
  const getDrawerVisible = computed(() => drawerVisible.value);

  /** 打开通知抽屉 */
  const openNotificationDrawer = () => {
    drawerVisible.value = true;
  };

  /** 关闭通知抽屉 */
  const closeNotificationDrawer = () => {
    drawerVisible.value = false;
  };

  return {
    getDrawerVisible,
    openNotificationDrawer,
    closeNotificationDrawer,
  };
});
