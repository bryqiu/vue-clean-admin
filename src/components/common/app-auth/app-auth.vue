<script setup lang="ts">
import { PermissionCode } from '@/types/common';
import { computed } from 'vue';

defineOptions({
  name: 'AppAuth',
});

export interface AppAuthProps {
  /**
   * 权限码
   */
  codes: PermissionCode;
}

const props = withDefaults(defineProps<AppAuthProps>(), {
  codes: '',
});

const { hasPermission } = useAuth();

/**
 * 是否有权限
 */
const hasAuth = computed(() => {
  return hasPermission(props.codes);
});
</script>

<template>
  <slot v-if="hasAuth" />
  <slot v-else name="no-auth" />
</template>
