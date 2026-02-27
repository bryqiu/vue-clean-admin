<script setup lang="ts">
import { cn } from '@/utils';

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
  <div :class="cn('p-2', groupClass)">
    <div v-if="categoryName" class="text-xs text-el-text-placeholder mb-1 w-full px-2">
      {{ categoryName }}
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
