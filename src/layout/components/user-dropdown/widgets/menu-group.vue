<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

defineOptions({
  name: 'MenuGroup',
});

interface MenuGroupProps {
  categoryName?: string;
  groupClass?: string;
}

withDefaults(defineProps<MenuGroupProps>(), {});
</script>

<template>
  <div :class="twMerge('p-2', groupClass)">
    <div v-if="categoryName" class="text-xs text-el-text-placeholder mb-1 w-full px-2">
      {{ categoryName }}
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
