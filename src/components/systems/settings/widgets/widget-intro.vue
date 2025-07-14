<script setup lang="ts">
import { ElDivider } from 'element-plus';

defineOptions({
  name: 'WidgetIntro',
});
interface WidgetIntroProps {
  title: string;
  desc?: string;
}

withDefaults(defineProps<WidgetIntroProps>(), {
  title: '标题',
});
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-col gap-y-1">
      <span class="text-el-text-primary text-lg font-normal flex-shrink-0">{{ title }}</span>
      <span v-if="desc" class="text-el-text-placeholder text-xs font-normal line-clamp-1">{{
        desc
      }}</span>
    </div>
    <ElDivider class="!mb-4 !mt-2" />
  </div>
</template>

<style scoped lang="scss"></style>
