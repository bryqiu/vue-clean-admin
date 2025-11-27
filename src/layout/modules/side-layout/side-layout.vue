<script setup lang="ts">
import { ElContainer } from 'element-plus';
import { default as Sidebar } from './side-sidebar.vue';
import { BasicContainer } from '@/layout/components/basic-container';

defineOptions({
  name: 'SideLayout',
});
</script>

<template>
  <ElContainer class="h-full bg-el-fill">
    <Sidebar />
    <BasicContainer />
  </ElContainer>
</template>

<style scoped lang="scss"></style>
