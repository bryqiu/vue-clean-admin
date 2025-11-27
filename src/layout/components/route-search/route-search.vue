<script setup lang="ts">
import { ElDivider, ElInput } from 'element-plus';
import { IconifyIcon } from '@/components/common/app-icon';
import { h } from 'vue';

defineOptions({
  name: 'RouteSearch',
});
const { isMenuCollapse } = useLayoutSettings();

const searchIcon = h(IconifyIcon, { name: 'ri:search-line' });
</script>

<template>
  <template v-if="!isMenuCollapse">
    <div class="w-full h-full flex items-center justify-center">
      <ElInput placeholder="搜索" :prefix-icon="searchIcon" />
    </div>
  </template>
  <template v-else>
    <ActionButton icon="ri:search-line" type="primary" size="small" />
    <ElDivider vertical class="!my-3 !w-7" />
  </template>
</template>

<style scoped lang="scss"></style>
