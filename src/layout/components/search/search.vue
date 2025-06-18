<script setup lang="ts">
import { h, ref } from 'vue';
import { ElInput } from 'element-plus';
import { IconifyIcon } from '@/components/common/app-icon';

defineOptions({
  name: 'Search',
});

const searchIcon = h(IconifyIcon, { name: 'ri:search-line' });
const searchValue = ref<string>('');
</script>

<template>
  <div>
    <ElInput v-model="searchValue" placeholder="搜索菜单内容" :prefix-icon="searchIcon" />
  </div>
</template>

<style scoped lang="scss"></style>
