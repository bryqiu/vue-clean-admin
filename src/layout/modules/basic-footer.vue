<script setup lang="ts">
import { ElFooter } from 'element-plus';
const title = import.meta.env.VITE_APP_TITLE;
</script>

<template>
  <ElFooter>{{ title }} ©2024 Created by Fifteen</ElFooter>
</template>

<style scoped lang="scss">
.el-footer {
  --el-footer-padding: 0;
  --el-footer-height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--el-fill-color-light);
}
</style>
