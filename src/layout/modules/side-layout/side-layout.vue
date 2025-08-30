<script setup lang="ts">
import { ElContainer } from 'element-plus';
import { BasicHeader } from '@/layout/components/basic-header';
import { BasicMain } from '@/layout/components/basic-main';
import { default as Sidebar } from './side-sidebar.vue';

defineOptions({
  name: 'SideLayout',
});

const { getCurrentSidebarWidth } = useLayoutSettings();
</script>

<template>
  <ElContainer class="h-full">
    <Sidebar />
    <ElContainer class="size-full !flex-col overflow-auto overflow-x-hidden relative">
      <BasicHeader
        :style="{
          width: `calc(100% - ${getCurrentSidebarWidth}px)`,
        }"
      />
      <BasicMain />
    </ElContainer>
  </ElContainer>
</template>

<style scoped lang="scss"></style>
