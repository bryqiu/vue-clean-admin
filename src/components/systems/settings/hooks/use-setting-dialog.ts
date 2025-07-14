import { createGlobalState } from '@vueuse/core';
import { computed, ref } from 'vue';

export const useSettingDialog = createGlobalState(() => {
  const dialogVisible = ref(false);

  const getDialogVisible = computed(() => {
    return dialogVisible.value;
  });

  const openSettingDialog = () => {
    dialogVisible.value = true;
  };

  const closeSettingDialog = () => {
    dialogVisible.value = false;
  };

  return {
    dialogVisible,
    getDialogVisible,
    openSettingDialog,
    closeSettingDialog,
  };
});
