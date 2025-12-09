<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue';
import type { IconProps } from '@iconify/vue';
import { omit } from 'lodash-es';
import { computed, useAttrs } from 'vue';

defineOptions({
  name: 'IconifyIcon',
});

export interface IconifyIconProps {
  /**
   * 图标名称
   */
  name: string;
}

const props = withDefaults(defineProps<IconifyIconProps>(), {});

const attrs = useAttrs();

const getIconifyIconProps = computed(() => {
  const defaultProps: IconProps = {
    inline: true,
    icon: props.name,
  };
  const iconifyIconProps = omit(attrs, 'icon');

  return {
    ...defaultProps,
    ...iconifyIconProps,
  };
});
</script>

<template>
  <IconifyIcon v-bind="getIconifyIconProps" />
</template>

<style scoped lang="scss"></style>
