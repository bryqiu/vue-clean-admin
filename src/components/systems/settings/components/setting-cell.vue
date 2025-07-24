<script setup lang="ts">
defineOptions({
  name: 'WidgetCell',
});

interface WidgetCellProps {
  title: string;
  desc: string;
}

withDefaults(defineProps<WidgetCellProps>(), {});
</script>

<template>
  <div class="flex items-center p-2 border border-el-border-light rounded-lg">
    <div class="flex justify-between items-center gap-x-2 flex-1">
      <div class="flex flex-col gap-y-1">
        <span class="text-el-text-primary text-sm font-medium line-clamp-1">{{ title }}</span>
        <span class="text-el-text-placeholder text-xs line-clamp-1">{{ desc }}</span>
      </div>
      <div class="min-w-36 flex justify-end">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
