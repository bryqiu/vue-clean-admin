import { createGlobalState } from '@vueuse/core';
import { computed, ref } from 'vue';

export const useSettingState = createGlobalState(() => {
  const dialogVisible = ref(false);

  /** 获取弹窗状态 */
  const getDialogVisible = computed(() => {
    return dialogVisible.value;
  });

  /** 打开弹窗 */
  const openSettingDialog = () => {
    dialogVisible.value = true;
  };

  /** 关闭弹窗 */
  const closeSettingDialog = () => {
    dialogVisible.value = false;
  };

  return {
    getDialogVisible,
    openSettingDialog,
    closeSettingDialog,
  };
});
