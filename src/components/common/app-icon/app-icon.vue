<script setup lang="ts">
import { computed } from 'vue';
import { SvgIcon } from './components';
import { Icon as IconifyIcon } from '@iconify/vue/dist/offline';
import type { AppIconProps } from './share-typing';

defineOptions({
  name: 'AppIcon',
});

const props = withDefaults(defineProps<AppIconProps>(), {
  type: 'iconify',
  icon: '',
});

const isIconify = computed(() => props.type === 'iconify');
</script>

<template>
  <component :is="isIconify ? IconifyIcon : SvgIcon" :icon="icon" v-bind="$attrs" />
</template>
