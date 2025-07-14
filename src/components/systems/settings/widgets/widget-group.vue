<script setup lang="ts">
defineOptions({
  name: 'WidgetGroup',
});
interface WidgetGroupProps {
  title: string;
}

withDefaults(defineProps<WidgetGroupProps>(), {
  title: '标题',
});
</script>

<template>
  <div class="border border-el-border-default rounded-lg">
    <div class="p-4 bg-el-fill-light border-b border-b-el-border-default rounded-t-lg">
      <span class="text-sm font-semibold text-el-text-primary">标题</span>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
