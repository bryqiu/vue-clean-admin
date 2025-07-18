<script setup lang="ts">
import { ElDivider } from 'element-plus';

defineOptions({
  name: 'WidgetBox',
});

interface WidgetBoxProps {
  /**
   * 标题
   * @default 标题
   */
  title: string;
  /**
   * 描述
   */
  desc?: string;
  /**
   * 是否显示分割线
   * @default true
   */
  showDivider?: boolean;
}

withDefaults(defineProps<WidgetBoxProps>(), {
  title: '标题',
  showDivider: true,
});
</script>

<template>
  <div>
    <div class="felx flex-col">
      <div class="flex items-center justify-between gap-x-4" :class="{ 'mb-3': $slots.default }">
        <div class="flex flex-col gap-y-1 flex-1">
          <template v-if="$slots.title">
            <slot name="title" />
          </template>
          <span v-else class="text-el-text-primary text-sm font-medium line-clamp-1">{{
            title
          }}</span>

          <template v-if="$slots.desc">
            <slot name="desc" />
          </template>
          <span
            v-else-if="desc"
            class="text-el-text-placeholder text-xs font-normal line-clamp-1"
            >{{ desc }}</span
          >
        </div>
        <div v-if="$slots.action">
          <slot name="action" />
        </div>
      </div>
      <div v-if="$slots.default" class="w-full">
        <slot />
      </div>
    </div>
    <ElDivider v-if="showDivider" class="!my-4" />
  </div>
</template>

<style scoped lang="scss"></style>
