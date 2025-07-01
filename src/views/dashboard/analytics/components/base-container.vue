<script setup lang="ts">
import { ElCard } from 'element-plus';

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
  <ElCard shadow="never" v-bind="$attrs" class="!border-transparent shadow">
    <div class="flex flex-col h-full gap-y-2" :class="containerClass">
      <!--头部-->
      <div v-if="showHeader" class="w-full" :class="headerClass">
        <template v-if="$slots.header">
          <slot name="header" />
        </template>
        <div v-else class="flex flex-col gap-y-1">
          <span class="text-lg font-medium text-el-text-primary">{{ title }}</span>
          <span v-if="showDescription" class="text-sm text-el-text-secondary">{{
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
