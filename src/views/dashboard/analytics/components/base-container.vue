<script setup lang="ts">
import { cn } from '@/utils';

defineOptions({
  name: 'BaseContainer',
});

export interface BaseContainerProps {
  title?: string;
  description?: string;
  containerClass?: string;
  headerClass?: string;
  showHeader?: boolean;
  showDescription?: boolean;
}

withDefaults(defineProps<BaseContainerProps>(), {
  showHeader: true,
  showDescription: true,
});
</script>

<template>
  <ElCard v-bind="$attrs">
    <div :class="cn('flex flex-col h-full gap-y-2', containerClass)">
      <!--头部-->
      <div v-if="showHeader" :class="cn('w-full', headerClass)">
        <template v-if="$slots.header">
          <slot name="header" />
        </template>
        <div v-else class="flex flex-col gap-y-1">
          <span class="text-base font-medium text-el-text-primary">{{ title }}</span>
          <span v-if="showDescription" class="text-xs text-el-text-secondary">{{
            description
          }}</span>
        </div>
      </div>
      <!--内容-->
      <slot />
    </div>
  </ElCard>
</template>

<style scoped lang="scss"></style>
