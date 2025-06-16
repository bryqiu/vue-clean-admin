<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

defineOptions({
  name: 'HeaderText',
});

export interface PageHeaderProps {
  title: string;
  titleClass?: string;
  subTitle?: string;
  subTitleClass?: string;
  isShowSubTitle?: boolean;
}

withDefaults(defineProps<PageHeaderProps>(), {
  title: '标题',
  subTitle: '',
});
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <span :class="twMerge('text-xl font-semibold', titleClass)">{{ title }}</span>
    <slot v-if="$slots.subTitle" name="subTitle" />
    <span v-else-if="subTitle" :class="twMerge('text-sm text-el-secondary', subTitleClass)">{{
      subTitle
    }}</span>
  </div>
</template>

<style scoped lang="scss"></style>
