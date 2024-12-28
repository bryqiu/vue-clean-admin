<script setup lang="ts">
import dayjs from 'dayjs';
import { isArray, isEmpty } from '@/utils';
import { computed } from 'vue';
import { ElLink } from 'element-plus';
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
}

const props = withDefaults(defineProps<AppCopyrightProps>(), {
  year: dayjs().year(),
  link: '',
  whole: false,
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
  <div class="text-xs text-[var(--el-text-color-placeholder)] w-full text-center">
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
