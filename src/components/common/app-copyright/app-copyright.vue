<script setup lang="ts">
import dayjs from 'dayjs';
import { isArray, isEmpty } from '@/utils';
import { computed } from 'vue';
import { twMerge } from 'tailwind-merge';

defineOptions({
  name: 'AppCopyright',
});

interface AppCopyrightProps {
  /**
   * 年份
   * @default 当前年份
   */
  year?: number | number[] | string | string[];
  /**
   * 版权拥有者
   */
  owner: string;
  /**
   * 链接
   * @default ''
   */
  link?: string;
  /**
   * 完整内容
   * @default false
   */
  whole?: boolean;
  /**
   * 文本类
   * @default ''
   */
  textClass?: string;
}

const props = withDefaults(defineProps<AppCopyrightProps>(), {
  year: dayjs().year(),
  link: '',
  whole: false,
  textClass: '',
});

/** 格式化年份 */
const formatYearValue = computed(() => {
  if (isArray(props.year)) {
    return props.year.join(' - ');
  }
  return props.year;
});
</script>

<template>
  <div :class="twMerge('text-xs text-el-text-secondary w-full text-center', textClass)">
    <span class="pr-1.5">Copyright © {{ formatYearValue }}</span>
    <span v-if="isEmpty(link)">{{ owner }}</span>
    <ElLink v-else type="primary" :href="link" target="_blank" v-bind="$attrs" class="!text-xs">
      {{ owner }}
    </ElLink>
    .
    <span v-if="whole">All Rights Reserved.</span>
  </div>
</template>

<style scoped lang="scss"></style>
