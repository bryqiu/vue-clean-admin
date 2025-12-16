<script setup lang="ts">
import { DirectionEnum } from '@/enums';
import { computed } from 'vue';
import { cn } from '@/utils';

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
  /**
   * 方向
   * @default horizontal
   */
  direction?: GetObjectValues<typeof DirectionEnum>;
}

const props = withDefaults(defineProps<WidgetBoxProps>(), {
  title: '标题',
  showDivider: true,
  direction: 'horizontal',
});

const isVertical = computed(() => props.direction === DirectionEnum.VERTICAL);
</script>

<template>
  <div>
    <div
      :class="
        cn('flex size-full gap-x-4', {
          'flex-col gap-y-4 items-start justify-between': isVertical,
        })
      "
    >
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
        <span v-else-if="desc" class="text-el-text-placeholder text-xs font-normal line-clamp-1">{{
          desc
        }}</span>
      </div>
      <slot />
    </div>
    <!-- <ElDivider v-if="showDivider" class="!my-6" /> -->
  </div>
</template>

<style scoped lang="scss"></style>
