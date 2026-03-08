import { createGlobalState } from '@vueuse/core';
import { computed, ref } from 'vue';

export const useLoadView = createGlobalState(() => {
  /** 是否加载视图 */
  const isLoadView = ref(true);

  /** 获取当前视图加载状态 */
  const getCurrentLoadViewStatus = computed(() => isLoadView.value);

  /** 重新加载视图操作 */
  const reloadViewHandle = () => {
    isLoadView.value = false;

    setTimeout(() => {
      isLoadView.value = true;
    }, 300);
  };

  return {
    getCurrentLoadViewStatus,
    reloadViewHandle,
  };
});
