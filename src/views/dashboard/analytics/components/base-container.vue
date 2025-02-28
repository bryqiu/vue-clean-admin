<script setup lang="ts">
import { ElCard } from 'element-plus';

defineOptions({
  name: 'BaseContainer',
});

export interface BaseContainerProps {
  title?: string;
  containerClass?: string;
  headerClass?: string;
}

withDefaults(defineProps<BaseContainerProps>(), {
  title: '--',
});
</script>

<template>
  <ElCard shadow="never" v-bind="$attrs" class="!border-transparent shadow">
    <div class="flex flex-col h-full gap-y-2" :class="containerClass">
      <!--头部-->
      <div class="w-full" :class="headerClass">
        <template v-if="$slots.header">
          <slot name="header" />
        </template>
        <template v-else>
          <span class="text-base font-medium">{{ title }}</span>
        </template>
      </div>
      <!--内容-->
      <slot />
    </div>
  </ElCard>
</template>

<style scoped lang="scss"></style>
