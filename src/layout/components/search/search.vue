<script setup lang="ts">
import { ref } from 'vue';
import { ElInput } from 'element-plus';

defineOptions({
  name: 'Search',
});

const { generateIconNode } = useIcon();
const searchValue = ref<string>('');
</script>

<template>
  <div>
    <ElInput
      v-model="searchValue"
      placeholder="搜索菜单内容"
      :prefix-icon="generateIconNode({ icon: 'ri:search-line' })"
    />
  </div>
</template>

<style scoped lang="scss"></style>
