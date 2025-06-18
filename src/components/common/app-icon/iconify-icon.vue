<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue/dist/offline';
import type { IconProps } from '@iconify/vue/dist/offline';

defineOptions({
  name: 'IconifyIcon',
});

interface IconifyIconProps extends Omit<IconProps, 'icon'> {
  /**
   * 图标名称
   */
  name: string;
}

withDefaults(defineProps<IconifyIconProps>(), {});
</script>

<template>
  <IconifyIcon :icon="name" :inline="true" v-bind="$attrs" />
</template>

<style scoped lang="scss"></style>
