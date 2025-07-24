<script setup lang="ts">
defineOptions({
  name: 'WidgetGroup',
});
interface WidgetGroupProps {
  title: string;
}

withDefaults(defineProps<WidgetGroupProps>(), {});
</script>

<template>
  <div class="flex flex-col my-2">
    <div class="mb-2">
      <template v-if="$slots.title">
        <slot name="title" />
      </template>
      <span v-else class="text-base font-semibold text-el-text-primary">{{ title }}</span>
    </div>
    <div class="space-y-3">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
