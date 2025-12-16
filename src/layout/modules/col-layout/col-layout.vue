<script setup lang="ts">
import { default as Sidebar } from './col-sidebar.vue';
import { BasicContainer } from '@/layout/components/basic-container';

defineOptions({
  name: 'ColLayout',
});
</script>

<template>
  <ElContainer class="h-full">
    <Sidebar />
    <BasicContainer />
  </ElContainer>
</template>

<style scoped lang="scss"></style>
