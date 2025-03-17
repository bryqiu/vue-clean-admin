<script setup lang="ts">
defineOptions({
  name: 'SegmentContainer',
});

interface SegmentContainerProps {
  title?: string;
}

withDefaults(defineProps<SegmentContainerProps>(), {
  title: '标题',
});
</script>

<template>
  <div class="flex flex-col border border-solid border-el-light p-4 rounded-lg">
    <div class="flex flex-col">
      <span class="text-base font-semibold">{{ title }}</span>
    </div>

    <div class="mt-2 space-y-2">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
